import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderResponseResult = {
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
  strategyId?: number;
  strategyType?: number;
  workingTime: number;
  selfTradePreventionMode: string;
};

export const orderResponseResultSchema: Schema<OrderResponseResult> = s.object<OrderResponseResult>({
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
  strategyId: s.optional(s.number()),
  strategyType: s.optional(s.number()),
  workingTime: s.number(),
  selfTradePreventionMode: s.string(),
});
