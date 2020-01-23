export { Telemetry } from './lib/telemetry';

export interface Store {
  get(key: string, defaultValue?: any): any;
  set(key: string, value: any): void;
  delete(key: string): void;
}
