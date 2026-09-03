import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row5 = {
  asset: string;
  amount: string;
  targetAsset: string;
  targetAmount: string;
  bizType: string;
  timestamp: number;
};

export const row5Schema: Schema<Row5> = s.object<Row5>({
  asset: s.string(),
  amount: s.string(),
  targetAsset: s.string(),
  targetAmount: s.string(),
  bizType: s.string(),
  timestamp: s.number(),
});
