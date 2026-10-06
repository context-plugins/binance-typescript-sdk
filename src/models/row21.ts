import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
  adjustTime: s.int(),
  orderId: s.int(),
  _keysMap: {
    preLtv: "preLTV",
    afterLtv: "afterLTV",
  },
});
