import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Asset1 = {
  asset: string;
  marginBalance: string;
  walletBalance: string;
};

export const asset1Schema: Schema<Asset1> = s.object<Asset1>({
  asset: s.string(),
  marginBalance: s.string(),
  walletBalance: s.string(),
});
