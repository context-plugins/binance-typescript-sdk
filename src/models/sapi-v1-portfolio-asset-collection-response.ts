import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioAssetCollectionResponse = {
  msg: string;
};

export const sapiV1PortfolioAssetCollectionResponseSchema: Schema<SapiV1PortfolioAssetCollectionResponse> =
  s.object<SapiV1PortfolioAssetCollectionResponse>({
    msg: s.string(),
  });
