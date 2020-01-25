import { TelemetryType } from '../record';

export class TelemetryParameters {
  constructor(
    private readonly type: TelemetryType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private readonly params: any
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetch(key: string): any {
    this.require(key);
    return this.params[key];
  }

  require(key: string): void {
    if (!Object.prototype.hasOwnProperty.call(this.params, key)) {
      throw new Error(
        `Telemetry ${this.type} does not have a parameter of ${key}`
      );
    }
  }
}
