import { s, type Schema } from "../core/index.js";
import { transferSchema, type Transfer } from "./transfer.js";

export type SapiV1SubAccountFuturesInternalTransferResponse = {
  success: boolean;
  futuresType: number;
  transfers: Transfer[];
};

export const sapiV1SubAccountFuturesInternalTransferResponseSchema: Schema<SapiV1SubAccountFuturesInternalTransferResponse> =
  s.object<SapiV1SubAccountFuturesInternalTransferResponse>({
    success: s.boolean(),
    futuresType: s.number(),
    transfers: s.array(s.lazy(() => transferSchema)),
  });
