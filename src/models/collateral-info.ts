import { s, type Schema } from "../core/index.js";

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
