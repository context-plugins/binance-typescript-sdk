import { s, type Schema } from "../core/index.js";

export type Data31 = {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
};

export const data31Schema: Schema<Data31> = s.object<Data31>({
  symbol: s.string(),
  baseAsset: s.string(),
  quoteAsset: s.string(),
});
