import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fill2Schema, type Fill2 } from "./fill2.js";

export type ApiV3SorOrderResponse = {
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
  fills: Fill2[];
  workingFloor: string;
  selfTradePreventionMode: string;
  usedSor: boolean;
};

export const apiV3SorOrderResponseSchema: Schema<ApiV3SorOrderResponse> = s.object<ApiV3SorOrderResponse>({
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
  workingTime: s.int(),
  fills: s.array(s.lazy(() => fill2Schema)),
  workingFloor: s.string(),
  selfTradePreventionMode: s.string(),
  usedSor: s.boolean(),
});
