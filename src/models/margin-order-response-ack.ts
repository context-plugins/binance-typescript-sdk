import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarginOrderResponseAck = {
  symbol: string;
  orderId: number;
  clientOrderId: string;
  isIsolated: boolean;
  transactTime: number;
};

export const marginOrderResponseAckSchema: Schema<MarginOrderResponseAck> = s.object<MarginOrderResponseAck>({
  symbol: s.string(),
  orderId: s.int(),
  clientOrderId: s.string(),
  isIsolated: s.boolean(),
  transactTime: s.int(),
});
