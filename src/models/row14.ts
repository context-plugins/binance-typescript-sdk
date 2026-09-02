import { s, type Schema } from "../core/index.js";

export type Row14 = {
  collateralAccountId: string;
  collateralCoin: string;
  collateralValue: string;
};

export const row14Schema: Schema<Row14> = s.object<Row14>({
  collateralAccountId: s.string(),
  collateralCoin: s.string(),
  collateralValue: s.string(),
});
