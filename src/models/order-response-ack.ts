import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderResponseAck = {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
};

export const orderResponseAckSchema: Schema<OrderResponseAck> = s.object<OrderResponseAck>({
  symbol: s.string(),
  orderId: s.int(),
  orderListId: s.int(),
  clientOrderId: s.string(),
  transactTime: s.int(),
});
