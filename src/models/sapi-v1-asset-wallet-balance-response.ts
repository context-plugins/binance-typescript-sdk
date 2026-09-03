import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AssetWalletBalanceResponse = {
  activate: boolean;
  balance: string;
  walletName: string;
};

export const sapiV1AssetWalletBalanceResponseSchema: Schema<SapiV1AssetWalletBalanceResponse> =
  s.object<SapiV1AssetWalletBalanceResponse>({
    activate: s.boolean(),
    balance: s.string(),
    walletName: s.string(),
  });
