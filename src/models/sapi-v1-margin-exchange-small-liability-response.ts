import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginExchangeSmallLiabilityResponse = {
  asset: string;
  interest: string;
  principal: string;
  liabilityAsset: string;
  liabilityQty: number;
};

export const sapiV1MarginExchangeSmallLiabilityResponseSchema: Schema<SapiV1MarginExchangeSmallLiabilityResponse> =
  s.object<SapiV1MarginExchangeSmallLiabilityResponse>({
    asset: s.string(),
    interest: s.string(),
    principal: s.string(),
    liabilityAsset: s.string(),
    liabilityQty: s.float64(),
  });
