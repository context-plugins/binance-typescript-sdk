import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Trade = {
  /** trade id */
  id: number;
  /** price */
  price: string;
  /** amount of base asset */
  qty: string;
  /** amount of quote asset */
  quoteQty: string;
  /** Trade executed timestamp, as same as `T` in the stream */
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
};

export const tradeSchema: Schema<Trade> = s.object<Trade>({
  id: s.int(),
  price: s.string(),
  qty: s.string(),
  quoteQty: s.string(),
  time: s.int(),
  isBuyerMaker: s.boolean(),
  isBestMatch: s.boolean(),
});
