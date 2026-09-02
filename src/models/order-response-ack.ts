import { s, type Schema } from "../core/index.js";

export type OrderResponseAck = {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
};

export const orderResponseAckSchema: Schema<OrderResponseAck> = s.object<OrderResponseAck>({
  symbol: s.string(),
  orderId: s.number(),
  orderListId: s.number(),
  clientOrderId: s.string(),
  transactTime: s.number(),
});
