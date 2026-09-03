import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data9Schema, type Data9 } from "./data9.js";

export type SapiV1MiningPubAlgoListResponse = {
  code: number;
  msg: string;
  data: Data9[];
};

export const sapiV1MiningPubAlgoListResponseSchema: Schema<SapiV1MiningPubAlgoListResponse> =
  s.object<SapiV1MiningPubAlgoListResponse>({
    code: s.number(),
    msg: s.string(),
    data: s.array(s.lazy(() => data9Schema)),
  });
