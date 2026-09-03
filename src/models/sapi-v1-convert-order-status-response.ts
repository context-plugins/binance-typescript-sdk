import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ConvertOrderStatusResponse = {
  orderId: number;
  orderStatus: string;
  fromAsset: string;
  fromAmount: string;
  toAsset: string;
  toAmount: string;
  ratio: string;
  inverseRatio: string;
  createTime: number;
};

export const sapiV1ConvertOrderStatusResponseSchema: Schema<SapiV1ConvertOrderStatusResponse> =
  s.object<SapiV1ConvertOrderStatusResponse>({
    orderId: s.number(),
    orderStatus: s.string(),
    fromAsset: s.string(),
    fromAmount: s.string(),
    toAsset: s.string(),
    toAmount: s.string(),
    ratio: s.string(),
    inverseRatio: s.string(),
    createTime: s.number(),
  });
