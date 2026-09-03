import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Fill = {
  price: string;
  qty: string;
  commission: string;
  commissionAsset: string;
};

export const fillSchema: Schema<Fill> = s.object<Fill>({
  price: s.string(),
  qty: s.string(),
  commission: s.string(),
  commissionAsset: s.string(),
});
