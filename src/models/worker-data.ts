import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WorkerData = {
  workerId: string;
  workerName: string;
  /** Status：1 valid, 2 invalid, 3 no longer valid */
  status: number;
  /** Real-time rate */
  hashRate: number;
  /** 24H Hashrate */
  dayHashRate: number;
  /** Real-time Rejection Rate */
  rejectRate: number;
  /** Last submission time */
  lastShareTime: number;
};

export const workerDataSchema: Schema<WorkerData> = s.object<WorkerData>({
  workerId: s.string(),
  workerName: s.string(),
  status: s.int(),
  hashRate: s.int(),
  dayHashRate: s.int(),
  rejectRate: s.int(),
  lastShareTime: s.int(),
});
