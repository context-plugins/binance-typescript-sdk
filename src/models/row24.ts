import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row24 = {
  orderId: string;
  collateralCoin: string;
  preMarginCall: string;
  afterMarginCall: string;
  customizeTime: number;
};

export const row24Schema: Schema<Row24> = s.object<Row24>({
  orderId: s.string(),
  collateralCoin: s.string(),
  preMarginCall: s.string(),
  afterMarginCall: s.string(),
  customizeTime: s.int(),
});
