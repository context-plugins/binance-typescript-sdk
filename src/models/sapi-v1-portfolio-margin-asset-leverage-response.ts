import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioMarginAssetLeverageResponse = {
  asset?: string;
  collateralRate?: string;
};

export const sapiV1PortfolioMarginAssetLeverageResponseSchema: Schema<SapiV1PortfolioMarginAssetLeverageResponse> =
  s.object<SapiV1PortfolioMarginAssetLeverageResponse>({
    asset: s.optional(s.string()),
    collateralRate: s.optional(s.string()),
  });
