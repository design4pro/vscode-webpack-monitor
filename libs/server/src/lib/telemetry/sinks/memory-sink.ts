import { TelemetryType } from '../record';
import { Sink } from '../sink';

export class MemorySink implements Sink {
  records: Record[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  record(type: TelemetryType, data: any): void {
    this.records.push({ type, data });
  }

  recordsByType(type: TelemetryType): Record[] {
    return this.records.filter(r => r.type === type);
  }

  oneRecord(type?: TelemetryType): Record {
    const records = type ? this.recordsByType(type) : this.records;

    if (records.length !== 1) {
      throw new Error(`Expected one record, have ${records.length}`);
    }

    return records[0];
  }

  hasRecord(type?: TelemetryType): boolean {
    const records = type ? this.recordsByType(type) : this.records;
    return records.length > 0;
  }
}

interface Record {
  type: TelemetryType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
