import { s, type Schema } from "../core/index.js";

export type MarginOrderDetail = {
  clientOrderId: string;
  cummulativeQuoteQty: string;
  executedQty: string;
  icebergQty: string;
  isWorking: boolean;
  orderId: number;
  origQty: string;
  price: string;
  side: string;
  status: string;
  stopPrice: string;
  symbol: string;
  isIsolated: boolean;
  time: number;
  timeInForce: string;
  type: string;
  updateTime: number;
  selfTradePreventionMode: string;
};

export const marginOrderDetailSchema: Schema<MarginOrderDetail> = s.object<MarginOrderDetail>({
  clientOrderId: s.string(),
  cummulativeQuoteQty: s.string(),
  executedQty: s.string(),
  icebergQty: s.string(),
  isWorking: s.boolean(),
  orderId: s.number(),
  origQty: s.string(),
  price: s.string(),
  side: s.string(),
  status: s.string(),
  stopPrice: s.string(),
  symbol: s.string(),
  isIsolated: s.boolean(),
  time: s.number(),
  timeInForce: s.string(),
  type: s.string(),
  updateTime: s.number(),
  selfTradePreventionMode: s.string(),
});
