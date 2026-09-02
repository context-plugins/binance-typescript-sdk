import { s, type Schema } from "../core/index.js";

export type SapiV1ConvertAcceptQuoteResponse = {
  orderId: string;
  createTime: number;
  orderStatus: string;
};

export const sapiV1ConvertAcceptQuoteResponseSchema: Schema<SapiV1ConvertAcceptQuoteResponse> =
  s.object<SapiV1ConvertAcceptQuoteResponse>({
    orderId: s.string(),
    createTime: s.number(),
    orderStatus: s.string(),
  });
