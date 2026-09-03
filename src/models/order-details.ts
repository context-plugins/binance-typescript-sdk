import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderDetails = {
  symbol: string;
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
  icebergQty: string;
  time: number;
  updateTime: number;
  isWorking: boolean;
  workingTime: number;
  origQuoteOrderQty: string;
  selfTradePreventionMode: string;
  preventedMatchId?: number;
  preventedQuantity?: string;
};

export const orderDetailsSchema: Schema<OrderDetails> = s.object<OrderDetails>({
  symbol: s.string(),
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
  icebergQty: s.string(),
  time: s.number(),
  updateTime: s.number(),
  isWorking: s.boolean(),
  workingTime: s.number(),
  origQuoteOrderQty: s.string(),
  selfTradePreventionMode: s.string(),
  preventedMatchId: s.optional(s.number()),
  preventedQuantity: s.optional(s.string()),
});
