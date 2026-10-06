import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fillSchema, type Fill } from "./fill.js";

export type MarginOrderResponseFull = {
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
  side: string;
  /** will not return if no margin trade happens */
  marginBuyBorrowAmount: number;
  /** will not return if no margin trade happens */
  marginBuyBorrowAsset: string;
  isIsolated: boolean;
  fills: Fill[];
};

export const marginOrderResponseFullSchema: Schema<MarginOrderResponseFull> =
  s.object<MarginOrderResponseFull>({
    symbol: s.string(),
    orderId: s.int(),
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
    marginBuyBorrowAmount: s.float64(),
    marginBuyBorrowAsset: s.string(),
    isIsolated: s.boolean(),
    fills: s.array(s.lazy(() => fillSchema)),
  });
