import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioAutoCollectionResponse = {
  msg: string;
};

export const sapiV1PortfolioAutoCollectionResponseSchema: Schema<SapiV1PortfolioAutoCollectionResponse> =
  s.object<SapiV1PortfolioAutoCollectionResponse>({
    msg: s.string(),
  });
