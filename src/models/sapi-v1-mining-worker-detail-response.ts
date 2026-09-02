import { s, type Schema } from "../core/index.js";
import { data11Schema, type Data11 } from "./data11.js";

export type SapiV1MiningWorkerDetailResponse = {
  code: number;
  msg: string;
  data: Data11[];
};

export const sapiV1MiningWorkerDetailResponseSchema: Schema<SapiV1MiningWorkerDetailResponse> =
  s.object<SapiV1MiningWorkerDetailResponse>({
    code: s.number(),
    msg: s.string(),
    data: s.array(s.lazy(() => data11Schema)),
  });
