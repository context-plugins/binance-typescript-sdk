import { s, type Schema } from "../core/index.js";

export type MarginOrderResponseAck = {
  symbol: string;
  orderId: number;
  clientOrderId: string;
  isIsolated: boolean;
  transactTime: number;
};

export const marginOrderResponseAckSchema: Schema<MarginOrderResponseAck> = s.object<MarginOrderResponseAck>({
  symbol: s.string(),
  orderId: s.number(),
  clientOrderId: s.string(),
  isIsolated: s.boolean(),
  transactTime: s.number(),
});
