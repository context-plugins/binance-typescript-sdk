import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data11Schema, type Data11 } from "./data11.js";

export type SapiV1MiningWorkerDetailResponse = {
  code: number;
  msg: string;
  data: Data11[];
};

export const sapiV1MiningWorkerDetailResponseSchema: Schema<SapiV1MiningWorkerDetailResponse> =
  s.object<SapiV1MiningWorkerDetailResponse>({
    code: s.int(),
    msg: s.string(),
    data: s.array(s.lazy(() => data11Schema)),
  });
