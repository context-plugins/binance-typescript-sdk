import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioBnbTransferResponse = {
  tranId: number;
};

export const sapiV1PortfolioBnbTransferResponseSchema: Schema<SapiV1PortfolioBnbTransferResponse> =
  s.object<SapiV1PortfolioBnbTransferResponse>({
    tranId: s.number(),
  });
