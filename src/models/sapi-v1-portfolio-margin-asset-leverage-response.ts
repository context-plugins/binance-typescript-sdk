import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioMarginAssetLeverageResponse = {
  asset?: string;
  collateralRate?: string;
};

export const sapiV1PortfolioMarginAssetLeverageResponseSchema: Schema<SapiV1PortfolioMarginAssetLeverageResponse> =
  s.object<SapiV1PortfolioMarginAssetLeverageResponse>({
    asset: s.optional(s.string()),
    collateralRate: s.optional(s.string()),
  });
