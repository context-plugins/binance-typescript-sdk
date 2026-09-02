import { s, type EnumSchema } from "../core/index.js";

export const FromAccountType = {
  Spot: "SPOT",
  UsdtFuture: "USDT_FUTURE",
  CoinFuture: "COIN_FUTURE",
  Margin: "MARGIN",
  IsolatedMargin: "ISOLATED_MARGIN",
} as const;
export type FromAccountType = (typeof FromAccountType)[keyof typeof FromAccountType] | (string & {});

export const fromAccountTypeSchema: EnumSchema<FromAccountType> = s.enumOf<FromAccountType>(FromAccountType);
