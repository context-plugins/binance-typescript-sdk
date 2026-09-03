import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { order1Schema, type Order1 } from "./order1.js";

export type ApiV3OrderListResponse = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: Order1[];
};

export const apiV3OrderListResponseSchema: Schema<ApiV3OrderListResponse> = s.object<ApiV3OrderListResponse>({
  orderListId: s.number(),
  contingencyType: s.string(),
  listStatusType: s.string(),
  listOrderStatus: s.string(),
  listClientOrderId: s.string(),
  transactionTime: s.number(),
  symbol: s.string(),
  orders: s.array(s.lazy(() => order1Schema)),
});
