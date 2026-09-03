import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Discount = {
  enabledForAccount?: boolean;
  enabledForSymbol?: boolean;
  discountAsset?: string;
  discount?: string;
};

export const discountSchema: Schema<Discount> = s.object<Discount>({
  enabledForAccount: s.optional(s.boolean()),
  enabledForSymbol: s.optional(s.boolean()),
  discountAsset: s.optional(s.string()),
  discount: s.optional(s.string()),
});
