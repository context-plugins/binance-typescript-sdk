import { s, type Schema } from "../core/index.js";

export type SapiV1ConvertLimitCancelOrderResponse = {
  orderId: number;
  status: string;
};

export const sapiV1ConvertLimitCancelOrderResponseSchema: Schema<SapiV1ConvertLimitCancelOrderResponse> =
  s.object<SapiV1ConvertLimitCancelOrderResponse>({
    orderId: s.number(),
    status: s.string(),
  });
