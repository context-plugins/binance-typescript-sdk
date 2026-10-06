import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderReport5 = {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  stopPrice: string;
};

export const orderReport5Schema: Schema<OrderReport5> = s.object<OrderReport5>({
  symbol: s.string(),
  orderId: s.int(),
  orderListId: s.int(),
  clientOrderId: s.string(),
  transactTime: s.int(),
  price: s.string(),
  origQty: s.string(),
  executedQty: s.string(),
  cummulativeQuoteQty: s.string(),
  status: s.string(),
  timeInForce: s.string(),
  type: s.string(),
  side: s.string(),
  stopPrice: s.string(),
});
