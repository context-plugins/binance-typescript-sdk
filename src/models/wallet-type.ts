import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WalletType = {
  Spot: "SPOT",
  Funding: "FUNDING",
  SpotFunding: "SPOT_FUNDING",
} as const;
export type WalletType = (typeof WalletType)[keyof typeof WalletType] | (string & {});

export const walletTypeSchema: EnumSchema<WalletType> = s.enumOf<WalletType>(WalletType);
