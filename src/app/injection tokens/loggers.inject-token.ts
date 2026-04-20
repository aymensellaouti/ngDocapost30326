import { InjectionToken } from "@angular/core";

export interface LoggerServiceInterface {
  log(message: unknown):void;
}

export const LOGGERS_INJECTION_TOKEN = new InjectionToken<LoggerServiceInterface[]>(
  'LOGGERS_INJECTION_TOKEN',
);
