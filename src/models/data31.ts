import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
