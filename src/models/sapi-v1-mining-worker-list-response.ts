import { s, type Schema } from "../core/index.js";
import { data12Schema, type Data12 } from "./data12.js";

export type SapiV1MiningWorkerListResponse = {
  code: number;
  msg: string;
  data: Data12;
};

export const sapiV1MiningWorkerListResponseSchema: Schema<SapiV1MiningWorkerListResponse> =
  s.object<SapiV1MiningWorkerListResponse>({
    code: s.number(),
    msg: s.string(),
    data: data12Schema,
  });
