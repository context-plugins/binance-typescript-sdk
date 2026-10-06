import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data17Schema, type Data17 } from "./data17.js";

export type SapiV1MiningStatisticsUserStatusResponse = {
  code: number;
  msg: string;
  data: Data17;
};

export const sapiV1MiningStatisticsUserStatusResponseSchema: Schema<SapiV1MiningStatisticsUserStatusResponse> =
  s.object<SapiV1MiningStatisticsUserStatusResponse>({
    code: s.int(),
    msg: s.string(),
    data: data17Schema,
  });
