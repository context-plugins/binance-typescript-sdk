import { s, type Schema } from "../core/index.js";

export type Row19 = {
  orderId: number;
  loanCoin: string;
  totalDebt: string;
  residualInterest: string;
  collateralCoin: string;
  collateralAmount: string;
  currentLtv: string;
  expirationTime: number;
};

export const row19Schema: Schema<Row19> = s.object<Row19>({
  orderId: s.number(),
  loanCoin: s.string(),
  totalDebt: s.string(),
  residualInterest: s.string(),
  collateralCoin: s.string(),
  collateralAmount: s.string(),
  currentLtv: s.string(),
  expirationTime: s.number(),
  _keysMap: {
    currentLtv: "currentLTV",
  },
});
