import { s, type Schema } from "../core/index.js";

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
