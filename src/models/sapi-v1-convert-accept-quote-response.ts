import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ConvertAcceptQuoteResponse = {
  orderId: string;
  createTime: number;
  orderStatus: string;
};

export const sapiV1ConvertAcceptQuoteResponseSchema: Schema<SapiV1ConvertAcceptQuoteResponse> =
  s.object<SapiV1ConvertAcceptQuoteResponse>({
    orderId: s.string(),
    createTime: s.int(),
    orderStatus: s.string(),
  });
