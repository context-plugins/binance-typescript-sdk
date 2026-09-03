import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderReport1 = {
  symbol: string;
  origClientOrderId: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
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

export const orderReport1Schema: Schema<OrderReport1> = s.object<OrderReport1>({
  symbol: s.string(),
  origClientOrderId: s.string(),
  orderId: s.number(),
  orderListId: s.number(),
  clientOrderId: s.string(),
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
