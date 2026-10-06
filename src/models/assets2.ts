import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Assets2 = {
  asset: string;
  marginBalance: number;
  walletBalance: number;
};

export const assets2Schema: Schema<Assets2> = s.object<Assets2>({
  asset: s.string(),
  marginBalance: s.float64(),
  walletBalance: s.float64(),
});
