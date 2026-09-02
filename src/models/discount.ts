import { s, type Schema } from "../core/index.js";

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
