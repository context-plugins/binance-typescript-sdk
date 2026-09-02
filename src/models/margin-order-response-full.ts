import { s, type Schema } from "../core/index.js";
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
  marginBuyBorrowAmount: number;
  marginBuyBorrowAsset: string;
  isIsolated: boolean;
  fills: Fill[];
};

export const marginOrderResponseFullSchema: Schema<MarginOrderResponseFull> =
  s.object<MarginOrderResponseFull>({
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
    side: s.string(),
    marginBuyBorrowAmount: s.number(),
    marginBuyBorrowAsset: s.string(),
    isIsolated: s.boolean(),
    fills: s.array(s.lazy(() => fillSchema)),
  });
