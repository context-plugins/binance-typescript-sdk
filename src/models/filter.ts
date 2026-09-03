import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Filter = {
  filterType: string;
  minPrice: string;
  maxPrice: string;
  tickSize: string;
};

export const filterSchema: Schema<Filter> = s.object<Filter>({
  filterType: s.string(),
  minPrice: s.string(),
  maxPrice: s.string(),
  tickSize: s.string(),
});
