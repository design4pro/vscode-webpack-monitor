import { TelemetryType } from '../record';
import { Sink } from '../sink';

export interface LogWriter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(...messages: any[]): void;
}

export function header(type: string): string {
  return `[Telemetry ${type}]`;
}

export class LoggerSink implements Sink {
  constructor(private readonly writer: LogWriter = console) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  record(type: TelemetryType, data: any) {
    this.writer.log(header(type), data);
  }
}
