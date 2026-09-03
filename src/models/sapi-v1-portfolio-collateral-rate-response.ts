import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioCollateralRateResponse = {
  asset: string;
  collateralRate: string;
};

export const sapiV1PortfolioCollateralRateResponseSchema: Schema<SapiV1PortfolioCollateralRateResponse> =
  s.object<SapiV1PortfolioCollateralRateResponse>({
    asset: s.string(),
    collateralRate: s.string(),
  });
