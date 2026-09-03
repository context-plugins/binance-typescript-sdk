import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioAssetIndexPriceResponse = {
  asset: string;
  assetIndexPrice: string;
  time: number;
};

export const sapiV1PortfolioAssetIndexPriceResponseSchema: Schema<SapiV1PortfolioAssetIndexPriceResponse> =
  s.object<SapiV1PortfolioAssetIndexPriceResponse>({
    asset: s.string(),
    assetIndexPrice: s.string(),
    time: s.number(),
  });
