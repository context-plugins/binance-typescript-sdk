import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { order1Schema, type Order1 } from "./order1.js";

export type SapiV1MarginOrderListResponse = {
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

export const sapiV1MarginOrderListResponseSchema: Schema<SapiV1MarginOrderListResponse> =
  s.object<SapiV1MarginOrderListResponse>({
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
