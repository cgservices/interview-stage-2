import { createLogger, format, transports } from 'winston';
const { combine, timestamp, prettyPrint, json, colorize, label, ms } = format;

export const logger = createLogger({
  format: combine(
    label(),
    timestamp(),
    prettyPrint(),
    json(),
    colorize({
      all: true,
    }),
    ms(),
  ),
  transports: [new transports.Console()],
  exitOnError: false,
});
