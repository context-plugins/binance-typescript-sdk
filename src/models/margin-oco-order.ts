import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderReport1Schema, type OrderReport1 } from "./order-report1.js";
import { order1Schema, type Order1 } from "./order1.js";

export type MarginOcoOrder = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  isIsolated: boolean;
  orders: Order1[];
  orderReports: OrderReport1[];
};

export const marginOcoOrderSchema: Schema<MarginOcoOrder> = s.object<MarginOcoOrder>({
  orderListId: s.int(),
  contingencyType: s.string(),
  listStatusType: s.string(),
  listOrderStatus: s.string(),
  listClientOrderId: s.string(),
  transactionTime: s.int(),
  symbol: s.string(),
  isIsolated: s.boolean(),
  orders: s.array(s.lazy(() => order1Schema)),
  orderReports: s.array(s.lazy(() => orderReport1Schema)),
});
