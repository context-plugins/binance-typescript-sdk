import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row8 = {
  tranId: number;
  type: number;
  time: number;
  deductedAsset: string;
  deductedAmount: string;
  targetAsset: string;
  targetAmount: string;
  status: string;
  accountType: string;
};

export const row8Schema: Schema<Row8> = s.object<Row8>({
  tranId: s.number(),
  type: s.number(),
  time: s.number(),
  deductedAsset: s.string(),
  deductedAmount: s.string(),
  targetAsset: s.string(),
  targetAmount: s.string(),
  status: s.string(),
  accountType: s.string(),
});
