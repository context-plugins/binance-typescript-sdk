import { s, type Schema } from "../core/index.js";

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
