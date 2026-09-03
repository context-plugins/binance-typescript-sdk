import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data18Schema, type Data18 } from "./data18.js";

export type SapiV1MiningStatisticsUserListResponse = {
  code: number;
  msg: string;
  data: Data18[];
};

export const sapiV1MiningStatisticsUserListResponseSchema: Schema<SapiV1MiningStatisticsUserListResponse> =
  s.object<SapiV1MiningStatisticsUserListResponse>({
    code: s.number(),
    msg: s.string(),
    data: s.array(s.lazy(() => data18Schema)),
  });
