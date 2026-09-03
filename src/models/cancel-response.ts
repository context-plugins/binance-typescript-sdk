import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelResponse = {
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
  selfTradePreventionMode: string;
  transactTime?: number;
};

export const cancelResponseSchema: Schema<CancelResponse> = s.object<CancelResponse>({
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
  selfTradePreventionMode: s.string(),
  transactTime: s.optional(s.number()),
});
