import { s, type Schema } from "../core/index.js";

export type Detail1 = {
  targetAsset?: string;
  percentage?: number;
};

export const detail1Schema: Schema<Detail1> = s.object<Detail1>({
  targetAsset: s.optional(s.string()),
  percentage: s.optional(s.number()),
});
