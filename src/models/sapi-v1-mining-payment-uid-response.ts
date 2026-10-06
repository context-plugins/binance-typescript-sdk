import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data19Schema, type Data19 } from "./data19.js";

export type SapiV1MiningPaymentUidResponse = {
  code: number;
  msg: string;
  data: Data19;
};

export const sapiV1MiningPaymentUidResponseSchema: Schema<SapiV1MiningPaymentUidResponse> =
  s.object<SapiV1MiningPaymentUidResponse>({
    code: s.int(),
    msg: s.string(),
    data: data19Schema,
  });
