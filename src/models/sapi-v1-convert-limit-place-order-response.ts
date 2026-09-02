import { s, type Schema } from "../core/index.js";

export type SapiV1ConvertLimitPlaceOrderResponse = {
  orderId: number;
  status: string;
};

export const sapiV1ConvertLimitPlaceOrderResponseSchema: Schema<SapiV1ConvertLimitPlaceOrderResponse> =
  s.object<SapiV1ConvertLimitPlaceOrderResponse>({
    orderId: s.number(),
    status: s.string(),
  });
