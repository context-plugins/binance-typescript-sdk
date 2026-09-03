import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CanceledMarginOrderDetail = {
  symbol: string;
  isIsolated: boolean;
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
};

export const canceledMarginOrderDetailSchema: Schema<CanceledMarginOrderDetail> =
  s.object<CanceledMarginOrderDetail>({
    symbol: s.string(),
    isIsolated: s.boolean(),
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
  });
