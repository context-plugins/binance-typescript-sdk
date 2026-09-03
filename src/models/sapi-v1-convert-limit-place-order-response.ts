import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ConvertLimitPlaceOrderResponse = {
  orderId: number;
  status: string;
};

export const sapiV1ConvertLimitPlaceOrderResponseSchema: Schema<SapiV1ConvertLimitPlaceOrderResponse> =
  s.object<SapiV1ConvertLimitPlaceOrderResponse>({
    orderId: s.number(),
    status: s.string(),
  });
