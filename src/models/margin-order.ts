import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarginOrder = {
  symbol: string;
  orderId: number;
  origClientOrderId: string;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
};

export const marginOrderSchema: Schema<MarginOrder> = s.object<MarginOrder>({
  symbol: s.string(),
  orderId: s.int(),
  origClientOrderId: s.string(),
  clientOrderId: s.string(),
  price: s.string(),
  origQty: s.string(),
  executedQty: s.string(),
  cummulativeQuoteQty: s.string(),
  status: s.string(),
  timeInForce: s.string(),
  type: s.string(),
  side: s.string(),
});
