import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CollateralInfo = {
  tierFloor: string;
  tierCap: string;
  collateralRate: string;
};

export const collateralInfoSchema: Schema<CollateralInfo> = s.object<CollateralInfo>({
  tierFloor: s.string(),
  tierCap: s.string(),
  collateralRate: s.string(),
});
