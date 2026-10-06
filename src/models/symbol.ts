import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";

export type Symbol = {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quoteAssetPrecision: number;
  baseCommissionPrecision: number;
  quoteCommissionPrecision: number;
  orderTypes: string[];
  icebergAllowed: boolean;
  ocoAllowed: boolean;
  otoAllowed: boolean;
  quoteOrderQtyMarketAllowed: boolean;
  allowTrailingStop: boolean;
  cancelReplaceAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  filters: Filter[];
  permissions: string[];
  permissionSets: string[][];
  defaultSelfTradePreventionMode: string;
  allowedSelfTradePreventionModes: string[];
};

export const symbolSchema: Schema<Symbol> = s.object<Symbol>({
  symbol: s.string(),
  status: s.string(),
  baseAsset: s.string(),
  baseAssetPrecision: s.int(),
  quoteAsset: s.string(),
  quoteAssetPrecision: s.int(),
  baseCommissionPrecision: s.int(),
  quoteCommissionPrecision: s.int(),
  orderTypes: s.array(s.string()),
  icebergAllowed: s.boolean(),
  ocoAllowed: s.boolean(),
  otoAllowed: s.boolean(),
  quoteOrderQtyMarketAllowed: s.boolean(),
  allowTrailingStop: s.boolean(),
  cancelReplaceAllowed: s.boolean(),
  isSpotTradingAllowed: s.boolean(),
  isMarginTradingAllowed: s.boolean(),
  filters: s.array(s.lazy(() => filterSchema)),
  permissions: s.array(s.string()),
  permissionSets: s.array(s.array(s.string())),
  defaultSelfTradePreventionMode: s.string(),
  allowedSelfTradePreventionModes: s.array(s.string()),
});
