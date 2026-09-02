import { s, type Schema } from "../core/index.js";
import { orderReport5Schema, type OrderReport5 } from "./order-report5.js";
import { order1Schema, type Order1 } from "./order1.js";

export type SapiV1MarginOrderOcoResponse = {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderStatus: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  marginBuyBorrowAmount: string;
  marginBuyBorrowAsset: string;
  isIsolated: boolean;
  orders: Order1[];
  orderReports: OrderReport5[];
};

export const sapiV1MarginOrderOcoResponseSchema: Schema<SapiV1MarginOrderOcoResponse> =
  s.object<SapiV1MarginOrderOcoResponse>({
    orderListId: s.number(),
    contingencyType: s.string(),
    listStatusType: s.string(),
    listOrderStatus: s.string(),
    listClientOrderId: s.string(),
    transactionTime: s.number(),
    symbol: s.string(),
    marginBuyBorrowAmount: s.string(),
    marginBuyBorrowAsset: s.string(),
    isIsolated: s.boolean(),
    orders: s.array(s.lazy(() => order1Schema)),
    orderReports: s.array(s.lazy(() => orderReport5Schema)),
  });
