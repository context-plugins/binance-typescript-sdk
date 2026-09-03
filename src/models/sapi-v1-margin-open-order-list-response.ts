import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { order1Schema, type Order1 } from "./order1.js";

export type SapiV1MarginOpenOrderListResponse = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  isIsolated: boolean;
  orders: Order1[];
};

export const sapiV1MarginOpenOrderListResponseSchema: Schema<SapiV1MarginOpenOrderListResponse> =
  s.object<SapiV1MarginOpenOrderListResponse>({
    orderListId: s.number(),
    contingencyType: s.string(),
    listStatusType: s.string(),
    listOrderStatus: s.string(),
    listClientOrderId: s.string(),
    transactionTime: s.number(),
    symbol: s.string(),
    isIsolated: s.boolean(),
    orders: s.array(s.lazy(() => order1Schema)),
  });
