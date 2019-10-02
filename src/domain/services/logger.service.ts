import { Logger } from '@nestjs/common';
import { APP_HOST } from '@constants';

export class Context {
  module: string;
  method: string;
}

// tslint:disable-next-line: max-classes-per-file
export class LoggerService extends Logger {
  logger(message: any, context?: Context) {
    const standard = {server: APP_HOST, type: 'INFO', time: Date.now()};
    const data = {...standard, ...context, message};
    super.log(data);
  }

  err(message: any, context: Context) {
    const standard = {server: APP_HOST, type: 'ERROR', time: Date.now()};
    const data = {...standard, ...context, message};
    super.error(data);
  }

  warning(message: any, context: Context) {
    const standard = {server: APP_HOST, type: 'WARNING', time: Date.now()};
    const data = {...standard, ...context, message};
    super.warn(data);
  }
}
