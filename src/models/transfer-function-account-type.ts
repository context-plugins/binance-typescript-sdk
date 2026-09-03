import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferFunctionAccountType = {
  Spot: "SPOT",
  Margin: "MARGIN",
  IsolatedMargin: "ISOLATED_MARGIN",
  UsdtFuture: "USDT_FUTURE",
  CoinFuture: "COIN_FUTURE",
} as const;
export type TransferFunctionAccountType =
  | (typeof TransferFunctionAccountType)[keyof typeof TransferFunctionAccountType]
  | (string & {});

export const transferFunctionAccountTypeSchema: EnumSchema<TransferFunctionAccountType> =
  s.enumOf<TransferFunctionAccountType>(TransferFunctionAccountType);
