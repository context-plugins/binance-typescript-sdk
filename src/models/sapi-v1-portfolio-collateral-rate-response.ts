import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioCollateralRateResponse = {
  asset: string;
  collateralRate: string;
};

export const sapiV1PortfolioCollateralRateResponseSchema: Schema<SapiV1PortfolioCollateralRateResponse> =
  s.object<SapiV1PortfolioCollateralRateResponse>({
    asset: s.string(),
    collateralRate: s.string(),
  });
