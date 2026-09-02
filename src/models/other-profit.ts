import { s, type Schema } from "../core/index.js";

export type OtherProfit = {
  time: number;
  coinName: string;
  type: number;
  profitAmount: number;
  status: number;
};

export const otherProfitSchema: Schema<OtherProfit> = s.object<OtherProfit>({
  time: s.number(),
  coinName: s.string(),
  type: s.number(),
  profitAmount: s.number(),
  status: s.number(),
});
