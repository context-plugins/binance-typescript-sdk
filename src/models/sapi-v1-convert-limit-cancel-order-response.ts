import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ConvertLimitCancelOrderResponse = {
  orderId: number;
  status: string;
};

export const sapiV1ConvertLimitCancelOrderResponseSchema: Schema<SapiV1ConvertLimitCancelOrderResponse> =
  s.object<SapiV1ConvertLimitCancelOrderResponse>({
    orderId: s.number(),
    status: s.string(),
  });
