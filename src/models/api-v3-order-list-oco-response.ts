import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderReport2Schema, type OrderReport2 } from "./order-report2.js";
import { order1Schema, type Order1 } from "./order1.js";

export type ApiV3OrderListOcoResponse = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: Order1[];
  orderReports: OrderReport2[];
};

export const apiV3OrderListOcoResponseSchema: Schema<ApiV3OrderListOcoResponse> =
  s.object<ApiV3OrderListOcoResponse>({
    orderListId: s.int(),
    contingencyType: s.string(),
    listStatusType: s.string(),
    listOrderStatus: s.string(),
    listClientOrderId: s.string(),
    transactionTime: s.int(),
    symbol: s.string(),
    orders: s.array(s.lazy(() => order1Schema)),
    orderReports: s.array(s.lazy(() => orderReport2Schema)),
  });
