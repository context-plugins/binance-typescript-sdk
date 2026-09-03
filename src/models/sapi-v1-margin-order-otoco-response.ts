import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderReport6Schema, type OrderReport6 } from "./order-report6.js";
import { order1Schema, type Order1 } from "./order1.js";

export type SapiV1MarginOrderOtocoResponse = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  isIsolated: boolean;
  orders: Order1[];
  orderReports: OrderReport6[];
};

export const sapiV1MarginOrderOtocoResponseSchema: Schema<SapiV1MarginOrderOtocoResponse> =
  s.object<SapiV1MarginOrderOtocoResponse>({
    orderListId: s.number(),
    contingencyType: s.string(),
    listStatusType: s.string(),
    listOrderStatus: s.string(),
    listClientOrderId: s.string(),
    transactionTime: s.number(),
    symbol: s.string(),
    isIsolated: s.boolean(),
    orders: s.array(s.lazy(() => order1Schema)),
    orderReports: s.array(s.lazy(() => orderReport6Schema)),
  });
