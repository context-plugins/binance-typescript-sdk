import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
