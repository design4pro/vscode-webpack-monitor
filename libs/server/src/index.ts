export { Telemetry } from './lib/telemetry';

export interface Store {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(key: string, defaultValue?: any): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set(key: string, value: any): void;
  delete(key: string): void;
}
