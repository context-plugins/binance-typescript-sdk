import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarginOrderResponseResult = {
  symbol: string;
  orderId: number;
  clientOrderId: string;
  transactTime: number;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  isIsolated: boolean;
  side: string;
};

export const marginOrderResponseResultSchema: Schema<MarginOrderResponseResult> =
  s.object<MarginOrderResponseResult>({
    symbol: s.string(),
    orderId: s.number(),
    clientOrderId: s.string(),
    transactTime: s.number(),
    price: s.string(),
    origQty: s.string(),
    executedQty: s.string(),
    cummulativeQuoteQty: s.string(),
    status: s.string(),
    timeInForce: s.string(),
    type: s.string(),
    isIsolated: s.boolean(),
    side: s.string(),
  });
