import { s, type Schema } from "../core/index.js";

export type SapiV1MarginManualLiquidationResponse = {
  asset: string;
  interest: string;
  principal: string;
  liabilityAsset: string;
  liabilityQty: number;
};

export const sapiV1MarginManualLiquidationResponseSchema: Schema<SapiV1MarginManualLiquidationResponse> =
  s.object<SapiV1MarginManualLiquidationResponse>({
    asset: s.string(),
    interest: s.string(),
    principal: s.string(),
    liabilityAsset: s.string(),
    liabilityQty: s.number(),
  });
