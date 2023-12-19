'use strict';
const path = require('path');

function parseFilename(filename) {
  var ext = path.extname(filename);

  return {
    dir: path.dirname(filename),
    base: path.basename(filename),
    ext: ext,
    name: path.basename(filename, ext),
  };
}

module.exports = {
  meta: {
    docs: {
      description: 'check file path',
      category: 'Possible Errors',
      recommended: false,
    },
    schema: [
      {
        type: 'object',
        properties: {
          filename: {
            type: 'string',
            enum: [
              'kebab-case',
              'point-started-kebab-case-with-brackets',
              'kebab-case-with-points-and-brackets',
            ],
          },
          directory: {
            type: 'string',
            enum: [
              'kebab-case',
              'point-started-kebab-case-with-brackets',
              'kebab-case-with-points-and-brackets',
            ],
          },
          ignore: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: function (context) {
    const pagesFileRegex = /^((\[)?(\.\.\.)?[a-z0-9\-]+(\])?(\.(page|spec))?)$/;
    const caseToRegexpMapping = {
      'point-started-kebab-case-with-brackets':
        /^(_\w+|\[\.?\.\.\w+\]|\[\w+\]|\w+|\w+(-\w+)*)$/,
      'kebab-case': /^([a-z0-9\-]+)$/,
      'kebab-case-with-points-and-brackets': /^(\[?[a-z0-9\-\.\]]+)$/,
    };
    const defaultOptions = {
      filename: 'kebab-case-with-points-and-brackets',
      directory: 'point-started-kebab-case-with-brackets',
      ignore: [],
    };
    const options = {
      ...defaultOptions,
      ...context.options[0],
    };
    const directoryConventionRegex = caseToRegexpMapping[options.directory];
    const filenameConventionRegex = caseToRegexpMapping[options.filename];

    return {
      Program: function (node) {
        const filename = context.getFilename();
        const absoluteFilename = path.resolve(filename);
        const relativePath = path.relative(process.cwd(), absoluteFilename);
        const parsed = parseFilename(relativePath);

        const isInPage = relativePath.includes(`${path.sep}pages${path.sep}`);

        const matchesRegex = (
          isInPage ? pagesFileRegex : filenameConventionRegex
        ).test(parsed.name);
        if (!matchesRegex && !options.ignore.includes(parsed.name)) {
          context.report(
            node,
            "Filename '{{name}}' in path '{{path}}' does not match the naming convention.",
            {
              name: parsed.name,
              path: parsed.dir,
            },
          );
        }
        parsed.dir.split(path.sep).forEach((directory) => {
          if (directory) {
            if (options.ignore.includes(directory)) {
              return;
            }
            const matchesRegex = directoryConventionRegex.test(directory);
            if (!matchesRegex) {
              context.report(
                node,
                "Folder '{{name}}' in path '{{path}}' does not match the naming convention.",
                {
                  name: directory,
                  path: parsed.dir,
                },
              );
            }
          }
        });
      },
    };
  },
};
