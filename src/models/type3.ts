import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type3 = {
  Transfer: "TRANSFER",
  Borrow: "BORROW",
  Repay: "REPAY",
  BuyIncome: "BUY_INCOME",
  BuyExpense: "BUY_EXPENSE",
  SellIncome: "SELL_INCOME",
  SellExpense: "SELL_EXPENSE",
  TradingCommission: "TRADING_COMMISSION",
  BuyLiquidation: "BUY_LIQUIDATION",
  SellLiquidation: "SELL_LIQUIDATION",
  RepayLiquidation: "REPAY_LIQUIDATION",
  OtherLiquidation: "OTHER_LIQUIDATION",
  LiquidationFee: "LIQUIDATION_FEE",
  SmallBalanceConvert: "SMALL_BALANCE_CONVERT",
  CommissionReturn: "COMMISSION_RETURN",
  SmallConvert: "SMALL_CONVERT",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
