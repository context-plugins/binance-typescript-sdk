import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row32 = {
  time: number;
  arrivalTime: number;
  asset: string;
  amount: string;
  status: string;
  distributeAsset: string;
  distributeAmount: string;
  conversionRatio: string;
};

export const row32Schema: Schema<Row32> = s.object<Row32>({
  time: s.number(),
  arrivalTime: s.number(),
  asset: s.string(),
  amount: s.string(),
  status: s.string(),
  distributeAsset: s.string(),
  distributeAmount: s.string(),
  conversionRatio: s.string(),
});
