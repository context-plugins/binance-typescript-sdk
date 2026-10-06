import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data13Schema, type Data13 } from "./data13.js";

export type SapiV1MiningPaymentListResponse = {
  code: number;
  msg: string;
  data: Data13;
};

export const sapiV1MiningPaymentListResponseSchema: Schema<SapiV1MiningPaymentListResponse> =
  s.object<SapiV1MiningPaymentListResponse>({
    code: s.int(),
    msg: s.string(),
    data: data13Schema,
  });
