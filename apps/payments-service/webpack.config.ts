import { composePlugins, withNx } from '@nx/webpack';
import CopyPlugin from 'copy-webpack-plugin';

export default composePlugins(withNx(), (config) => {
  const copyPluginConfig = new CopyPlugin({
    patterns: [{ from: 'src/rules-engine/rules.json', to: 'rules.json' }],
  });

  return {
    ...config,
    plugins: config.plugins
      ? [...config.plugins, copyPluginConfig]
      : [copyPluginConfig],
  };
});
