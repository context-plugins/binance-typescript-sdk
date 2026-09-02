import { s, type Schema } from "../core/index.js";
import { collateralSchema, type Collateral } from "./collateral.js";

export type SapiV1MarginCrossMarginCollateralRatioResponse = {
  collaterals: Collateral[];
  assetNames: string[];
};

export const sapiV1MarginCrossMarginCollateralRatioResponseSchema: Schema<SapiV1MarginCrossMarginCollateralRatioResponse> =
  s.object<SapiV1MarginCrossMarginCollateralRatioResponse>({
    collaterals: s.array(s.lazy(() => collateralSchema)),
    assetNames: s.array(s.string()),
  });
