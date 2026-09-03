import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Order17 = {
  algoId: number;
  symbol: string;
  side: string;
  totalQty: string;
  executedQty: string;
  executedAmt: string;
  avgPrice: string;
  clientAlgoId: string;
  bookTime: number;
  endTime: number;
  algoStatus: string;
  algoType: string;
  urgency: string;
};

export const order17Schema: Schema<Order17> = s.object<Order17>({
  algoId: s.number(),
  symbol: s.string(),
  side: s.string(),
  totalQty: s.string(),
  executedQty: s.string(),
  executedAmt: s.string(),
  avgPrice: s.string(),
  clientAlgoId: s.string(),
  bookTime: s.number(),
  endTime: s.number(),
  algoStatus: s.string(),
  algoType: s.string(),
  urgency: s.string(),
});
