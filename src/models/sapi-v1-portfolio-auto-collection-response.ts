import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioAutoCollectionResponse = {
  msg: string;
};

export const sapiV1PortfolioAutoCollectionResponseSchema: Schema<SapiV1PortfolioAutoCollectionResponse> =
  s.object<SapiV1PortfolioAutoCollectionResponse>({
    msg: s.string(),
  });
