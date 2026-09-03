import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Collateral = {
  minUsdValue: string;
  maxUsdValue: string;
  discountRate: string;
};

export const collateralSchema: Schema<Collateral> = s.object<Collateral>({
  minUsdValue: s.string(),
  maxUsdValue: s.string(),
  discountRate: s.string(),
});
