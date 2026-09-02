import { s, type Schema } from "../core/index.js";

export type SapiV1FuturesTransferResponse = {
  tranId: number;
};

export const sapiV1FuturesTransferResponseSchema: Schema<SapiV1FuturesTransferResponse> =
  s.object<SapiV1FuturesTransferResponse>({
    tranId: s.number(),
  });
