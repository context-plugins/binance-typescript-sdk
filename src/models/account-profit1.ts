import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountProfit1 = {
  time: number;
  coinName: string;
  type: number;
  puid: number;
  subName: string;
  amount: number;
};

export const accountProfit1Schema: Schema<AccountProfit1> = s.object<AccountProfit1>({
  time: s.number(),
  coinName: s.string(),
  type: s.number(),
  puid: s.number(),
  subName: s.string(),
  amount: s.number(),
});
