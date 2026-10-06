import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row32 = {
  time: number;
  arrivalTime: number;
  asset: string;
  amount: string;
  /** PENDING, SUCCESS, FAILED */
  status: string;
  distributeAsset: string;
  distributeAmount: string;
  conversionRatio: string;
};

export const row32Schema: Schema<Row32> = s.object<Row32>({
  time: s.int(),
  arrivalTime: s.int(),
  asset: s.string(),
  amount: s.string(),
  status: s.string(),
  distributeAsset: s.string(),
  distributeAmount: s.string(),
  conversionRatio: s.string(),
});
