import { s, type Schema } from "../core/index.js";

export type OrderReport = {
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
  selfTradePreventionMode: string;
  transactTime: number;
};

export const orderReportSchema: Schema<OrderReport> = s.object<OrderReport>({
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
  selfTradePreventionMode: s.string(),
  transactTime: s.number(),
});
