import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderReportSchema, type OrderReport } from "./order-report.js";
import { order1Schema, type Order1 } from "./order1.js";

export type OcoOrder = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: Order1[];
  orderReports: OrderReport[];
};

export const ocoOrderSchema: Schema<OcoOrder> = s.object<OcoOrder>({
  orderListId: s.int(),
  contingencyType: s.string(),
  listStatusType: s.string(),
  listOrderStatus: s.string(),
  listClientOrderId: s.string(),
  transactionTime: s.int(),
  symbol: s.string(),
  orders: s.array(s.lazy(() => order1Schema)),
  orderReports: s.array(s.lazy(() => orderReportSchema)),
});
