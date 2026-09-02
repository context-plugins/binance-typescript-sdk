import { s, type Schema } from "../core/index.js";

export type Row21 = {
  loanCoin: string;
  collateralCoin: string;
  direction: string;
  amount: string;
  preLtv: string;
  afterLtv: string;
  adjustTime: number;
  orderId: number;
};

export const row21Schema: Schema<Row21> = s.object<Row21>({
  loanCoin: s.string(),
  collateralCoin: s.string(),
  direction: s.string(),
  amount: s.string(),
  preLtv: s.string(),
  afterLtv: s.string(),
  adjustTime: s.number(),
  orderId: s.number(),
  _keysMap: {
    preLtv: "preLTV",
    afterLtv: "afterLTV",
  },
});
