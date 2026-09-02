import { s, type Schema } from "../core/index.js";

export type QuoteAsset = {
  asset: string;
  borrowEnabled: boolean;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
  netAssetOfBtc: string;
  repayEnabled: boolean;
  totalAsset: string;
};

export const quoteAssetSchema: Schema<QuoteAsset> = s.object<QuoteAsset>({
  asset: s.string(),
  borrowEnabled: s.boolean(),
  borrowed: s.string(),
  free: s.string(),
  interest: s.string(),
  locked: s.string(),
  netAsset: s.string(),
  netAssetOfBtc: s.string(),
  repayEnabled: s.boolean(),
  totalAsset: s.string(),
});
