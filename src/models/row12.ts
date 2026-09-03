import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row12 = {
  orderId: number;
  loanCoin: string;
  totalDebt: string;
  residualInterest: string;
  collateralAccountId: string;
  collateralCoin: string;
  collateralValue: string;
  totalCollateralValueAfterHaircut?: string;
  lockedCollateralValue?: string;
  currentLtv: string;
  expirationTime: number;
  loanDate: string;
  loanRate: string;
  loanTerm: string;
};

export const row12Schema: Schema<Row12> = s.object<Row12>({
  orderId: s.number(),
  loanCoin: s.string(),
  totalDebt: s.string(),
  residualInterest: s.string(),
  collateralAccountId: s.string(),
  collateralCoin: s.string(),
  collateralValue: s.string(),
  totalCollateralValueAfterHaircut: s.optional(s.string()),
  lockedCollateralValue: s.optional(s.string()),
  currentLtv: s.string(),
  expirationTime: s.number(),
  loanDate: s.string(),
  loanRate: s.string(),
  loanTerm: s.string(),
  _keysMap: {
    currentLtv: "currentLTV",
  },
});
