import { s, type Schema } from "../core/index.js";

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
