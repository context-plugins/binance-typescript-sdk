import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioBnbTransferResponse = {
  tranId: number;
};

export const sapiV1PortfolioBnbTransferResponseSchema: Schema<SapiV1PortfolioBnbTransferResponse> =
  s.object<SapiV1PortfolioBnbTransferResponse>({
    tranId: s.number(),
  });
