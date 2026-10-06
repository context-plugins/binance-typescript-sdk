import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubOrder = {
  algoId: number;
  orderId: number;
  orderStatus: string;
  executedQty?: string;
  executedAmt: string;
  feeAmt: string;
  feeAsset: string;
  bookTime: number;
  avgPrice: string;
  side: string;
  symbol: string;
  subId: number;
  timeInForce: string;
  origQty: string;
};

export const subOrderSchema: Schema<SubOrder> = s.object<SubOrder>({
  algoId: s.int(),
  orderId: s.int(),
  orderStatus: s.string(),
  executedQty: s.optional(s.string()),
  executedAmt: s.string(),
  feeAmt: s.string(),
  feeAsset: s.string(),
  bookTime: s.int(),
  avgPrice: s.string(),
  side: s.string(),
  symbol: s.string(),
  subId: s.int(),
  timeInForce: s.string(),
  origQty: s.string(),
});
