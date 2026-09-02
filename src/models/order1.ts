import { s, type Schema } from "../core/index.js";

export type Order1 = {
  symbol: string;
  orderId: number;
  clientOrderId: string;
};

export const order1Schema: Schema<Order1> = s.object<Order1>({
  symbol: s.string(),
  orderId: s.number(),
  clientOrderId: s.string(),
});
