import { s, type Schema } from "../core/index.js";
import { order1Schema, type Order1 } from "./order1.js";

export type SapiV1MarginAllOrderListResponse = {
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

export const sapiV1MarginAllOrderListResponseSchema: Schema<SapiV1MarginAllOrderListResponse> =
  s.object<SapiV1MarginAllOrderListResponse>({
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
