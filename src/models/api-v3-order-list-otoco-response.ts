import { s, type Schema } from "../core/index.js";
import { orderReport3Schema, type OrderReport3 } from "./order-report3.js";
import { order1Schema, type Order1 } from "./order1.js";

export type ApiV3OrderListOtocoResponse = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: Order1[];
  orderReports: OrderReport3[];
};

export const apiV3OrderListOtocoResponseSchema: Schema<ApiV3OrderListOtocoResponse> =
  s.object<ApiV3OrderListOtocoResponse>({
    orderListId: s.number(),
    contingencyType: s.string(),
    listStatusType: s.string(),
    listOrderStatus: s.string(),
    listClientOrderId: s.string(),
    transactionTime: s.number(),
    symbol: s.string(),
    orders: s.array(s.lazy(() => order1Schema)),
    orderReports: s.array(s.lazy(() => orderReport3Schema)),
  });
