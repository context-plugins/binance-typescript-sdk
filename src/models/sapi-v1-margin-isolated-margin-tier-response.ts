import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginIsolatedMarginTierResponse = {
  symbol?: string;
  tier?: number;
  effectiveMultiple?: string;
  initialRiskRatio?: string;
  liquidationRiskRatio?: string;
  baseAssetMaxBorrowable?: string;
  quoteAssetMaxBorrowable?: string;
};

export const sapiV1MarginIsolatedMarginTierResponseSchema: Schema<SapiV1MarginIsolatedMarginTierResponse> =
  s.object<SapiV1MarginIsolatedMarginTierResponse>({
    symbol: s.optional(s.string()),
    tier: s.optional(s.int()),
    effectiveMultiple: s.optional(s.string()),
    initialRiskRatio: s.optional(s.string()),
    liquidationRiskRatio: s.optional(s.string()),
    baseAssetMaxBorrowable: s.optional(s.string()),
    quoteAssetMaxBorrowable: s.optional(s.string()),
  });
