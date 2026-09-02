import { s, type Schema } from "../core/index.js";
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
