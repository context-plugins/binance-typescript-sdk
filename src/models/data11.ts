import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hashrateDataSchema, type HashrateData } from "./hashrate-data.js";

export type Data11 = {
  workerName: string;
  type: string;
  hashrateDatas: HashrateData[];
};

export const data11Schema: Schema<Data11> = s.object<Data11>({
  workerName: s.string(),
  type: s.string(),
  hashrateDatas: s.array(s.lazy(() => hashrateDataSchema)),
});
