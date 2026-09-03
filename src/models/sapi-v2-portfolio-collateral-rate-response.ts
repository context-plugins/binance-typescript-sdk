import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collateralInfoSchema, type CollateralInfo } from "./collateral-info.js";

export type SapiV2PortfolioCollateralRateResponse = {
  asset: string;
  collateralInfo: CollateralInfo[];
};

export const sapiV2PortfolioCollateralRateResponseSchema: Schema<SapiV2PortfolioCollateralRateResponse> =
  s.object<SapiV2PortfolioCollateralRateResponse>({
    asset: s.string(),
    collateralInfo: s.array(s.lazy(() => collateralInfoSchema)),
  });
