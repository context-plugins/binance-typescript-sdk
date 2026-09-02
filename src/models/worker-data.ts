import { s, type Schema } from "../core/index.js";

export type WorkerData = {
  workerId: string;
  workerName: string;
  status: number;
  hashRate: number;
  dayHashRate: number;
  rejectRate: number;
  lastShareTime: number;
};

export const workerDataSchema: Schema<WorkerData> = s.object<WorkerData>({
  workerId: s.string(),
  workerName: s.string(),
  status: s.number(),
  hashRate: s.number(),
  dayHashRate: s.number(),
  rejectRate: s.number(),
  lastShareTime: s.number(),
});
