import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderReport6 = {
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
  selfTradePreventionMode: string;
};

export const orderReport6Schema: Schema<OrderReport6> = s.object<OrderReport6>({
  symbol: s.string(),
  orderId: s.number(),
  orderListId: s.number(),
  clientOrderId: s.string(),
  transactTime: s.number(),
  price: s.string(),
  origQty: s.string(),
  executedQty: s.string(),
  cummulativeQuoteQty: s.string(),
  status: s.string(),
  timeInForce: s.string(),
  type: s.string(),
  side: s.string(),
  selfTradePreventionMode: s.string(),
});
