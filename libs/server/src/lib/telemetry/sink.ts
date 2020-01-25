import { TelemetryType } from './record';

export interface Sink {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  record(type: TelemetryType, data: any): void;
}
