import { s, type EnumSchema } from "../core/index.js";

export const Type9 = {
  BorrowIn: "borrowIn",
  CollateralSpent: "collateralSpent",
  RepayAmount: "repayAmount",
  CollateralReturn: "collateralReturn",
  AddCollateral: "addCollateral",
  RemoveCollateral: "removeCollateral",
  CollateralReturnAfterLiquidation: "collateralReturnAfterLiquidation",
} as const;
export type Type9 = (typeof Type9)[keyof typeof Type9] | (string & {});

export const type9Schema: EnumSchema<Type9> = s.enumOf<Type9>(Type9);
