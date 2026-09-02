import { s, type Schema } from "../core/index.js";

export type ProfitTransferDetail = {
  poolUsername: string;
  toPoolUsername: string;
  algoName: string;
  hashRate: number;
  day: number;
  amount: number;
  coinName: string;
};

export const profitTransferDetailSchema: Schema<ProfitTransferDetail> = s.object<ProfitTransferDetail>({
  poolUsername: s.string(),
  toPoolUsername: s.string(),
  algoName: s.string(),
  hashRate: s.number(),
  day: s.number(),
  amount: s.number(),
  coinName: s.string(),
});
