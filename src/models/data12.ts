import { s, type Schema } from "../core/index.js";
import { workerDataSchema, type WorkerData } from "./worker-data.js";

export type Data12 = {
  workerDatas: WorkerData[];
  totalNum: number;
  pageSize: number;
};

export const data12Schema: Schema<Data12> = s.object<Data12>({
  workerDatas: s.array(s.lazy(() => workerDataSchema)),
  totalNum: s.number(),
  pageSize: s.number(),
});
