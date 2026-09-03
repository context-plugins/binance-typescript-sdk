import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1FuturesTransferResponse = {
  tranId: number;
};

export const sapiV1FuturesTransferResponseSchema: Schema<SapiV1FuturesTransferResponse> =
  s.object<SapiV1FuturesTransferResponse>({
    tranId: s.number(),
  });
