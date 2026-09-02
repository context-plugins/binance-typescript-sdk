import { s, type Schema } from "../core/index.js";
import { transferResultSchema, type TransferResult } from "./transfer-result.js";

export type SapiV1AssetDustResponse = {
  totalServiceCharge: string;
  totalTransfered: string;
  transferResult: TransferResult[];
};

export const sapiV1AssetDustResponseSchema: Schema<SapiV1AssetDustResponse> =
  s.object<SapiV1AssetDustResponse>({
    totalServiceCharge: s.string(),
    totalTransfered: s.string(),
    transferResult: s.array(s.lazy(() => transferResultSchema)),
  });
