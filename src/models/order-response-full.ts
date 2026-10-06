import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fillSchema, type Fill } from "./fill.js";

export type OrderResponseFull = {
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
  fills: Fill[];
};

export const orderResponseFullSchema: Schema<OrderResponseFull> = s.object<OrderResponseFull>({
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
  strategyId: s.optional(s.int()),
  strategyType: s.optional(s.int()),
  workingTime: s.int(),
  selfTradePreventionMode: s.string(),
  fills: s.array(s.lazy(() => fillSchema)),
});
