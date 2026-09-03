import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Trade = {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
};

export const tradeSchema: Schema<Trade> = s.object<Trade>({
  id: s.number(),
  price: s.string(),
  qty: s.string(),
  quoteQty: s.string(),
  time: s.number(),
  isBuyerMaker: s.boolean(),
  isBestMatch: s.boolean(),
});
