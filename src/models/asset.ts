import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseAssetSchema, type BaseAsset } from "./base-asset.js";
import { quoteAssetSchema, type QuoteAsset } from "./quote-asset.js";

export type Asset = {
  baseAsset: BaseAsset;
  quoteAsset: QuoteAsset;
  symbol: string;
  isolatedCreated: boolean;
  /** true-enabled, false-disabled */
  enabled: boolean;
  marginLevel: string;
  /** "EXCESSIVE", "NORMAL", "MARGIN_CALL", "PRE_LIQUIDATION", "FORCE_LIQUIDATION" */
  marginLevelStatus: string;
  marginRatio: string;
  indexPrice: string;
  liquidatePrice: string;
  liquidateRate: string;
  tradeEnabled: boolean;
};

export const assetSchema: Schema<Asset> = s.object<Asset>({
  baseAsset: baseAssetSchema,
  quoteAsset: quoteAssetSchema,
  symbol: s.string(),
  isolatedCreated: s.boolean(),
  enabled: s.boolean(),
  marginLevel: s.string(),
  marginLevelStatus: s.string(),
  marginRatio: s.string(),
  indexPrice: s.string(),
  liquidatePrice: s.string(),
  liquidateRate: s.string(),
  tradeEnabled: s.boolean(),
});
