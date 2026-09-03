import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NewOrderResponse = {
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
  workingTime: number;
  fills: string[];
  selfTradePreventionMode: string;
};

export const newOrderResponseSchema: Schema<NewOrderResponse> = s.object<NewOrderResponse>({
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
  workingTime: s.number(),
  fills: s.array(s.string()),
  selfTradePreventionMode: s.string(),
});
