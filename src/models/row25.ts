import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row25 = {
  loanCoin: string;
  totalDebt: string;
  collateralCoin: string;
  collateralAmount: string;
  currentLtv: string;
};

export const row25Schema: Schema<Row25> = s.object<Row25>({
  loanCoin: s.string(),
  totalDebt: s.string(),
  collateralCoin: s.string(),
  collateralAmount: s.string(),
  currentLtv: s.string(),
  _keysMap: {
    currentLtv: "currentLTV",
  },
});
