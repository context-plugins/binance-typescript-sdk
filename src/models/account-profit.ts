import { s, type Schema } from "../core/index.js";

export type AccountProfit = {
  time: number;
  type: number;
  hashTransfer: number;
  transferAmount: number;
  dayHashRate: number;
  profitAmount: number;
  coinName: string;
  status: number;
};

export const accountProfitSchema: Schema<AccountProfit> = s.object<AccountProfit>({
  time: s.number(),
  type: s.number(),
  hashTransfer: s.number(),
  transferAmount: s.number(),
  dayHashRate: s.number(),
  profitAmount: s.number(),
  coinName: s.string(),
  status: s.number(),
});
