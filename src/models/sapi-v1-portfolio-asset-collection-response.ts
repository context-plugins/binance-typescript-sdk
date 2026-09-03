import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioAssetCollectionResponse = {
  msg: string;
};

export const sapiV1PortfolioAssetCollectionResponseSchema: Schema<SapiV1PortfolioAssetCollectionResponse> =
  s.object<SapiV1PortfolioAssetCollectionResponse>({
    msg: s.string(),
  });
