import { s, type EnumSchema } from "../core/index.js";

export const WalletType = {
  Spot: "SPOT",
  Funding: "FUNDING",
  SpotFunding: "SPOT_FUNDING",
} as const;
export type WalletType = (typeof WalletType)[keyof typeof WalletType] | (string & {});

export const walletTypeSchema: EnumSchema<WalletType> = s.enumOf<WalletType>(WalletType);
