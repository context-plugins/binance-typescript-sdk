import { s, type Schema } from "../core/index.js";

export type Row28 = {
  loanCoin: string;
  collateralCoin: string;
  direction: string;
  collateralAmount: string;
  preLtv: string;
  afterLtv: string;
  adjustTime: number;
};

export const row28Schema: Schema<Row28> = s.object<Row28>({
  loanCoin: s.string(),
  collateralCoin: s.string(),
  direction: s.string(),
  collateralAmount: s.string(),
  preLtv: s.string(),
  afterLtv: s.string(),
  adjustTime: s.number(),
  _keysMap: {
    preLtv: "preLTV",
    afterLtv: "afterLTV",
  },
});
