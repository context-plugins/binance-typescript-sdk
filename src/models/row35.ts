import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row35 = {
  time: number;
  fromAsset: string;
  fromAmount: string;
  toAsset: string;
  toAmount: string;
  exchangeRate: string;
  status: string;
};

export const row35Schema: Schema<Row35> = s.object<Row35>({
  time: s.number(),
  fromAsset: s.string(),
  fromAmount: s.string(),
  toAsset: s.string(),
  toAmount: s.string(),
  exchangeRate: s.string(),
  status: s.string(),
});
