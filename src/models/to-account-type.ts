import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ToAccountType = {
  Spot: "SPOT",
  UsdtFuture: "USDT_FUTURE",
  CoinFuture: "COIN_FUTURE",
  Margin: "MARGIN",
  IsolatedMargin: "ISOLATED_MARGIN",
} as const;
export type ToAccountType = (typeof ToAccountType)[keyof typeof ToAccountType] | (string & {});

export const toAccountTypeSchema: EnumSchema<ToAccountType> = s.enumOf<ToAccountType>(ToAccountType);
