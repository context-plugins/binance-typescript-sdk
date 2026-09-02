import { s, type Schema } from "../core/index.js";

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
