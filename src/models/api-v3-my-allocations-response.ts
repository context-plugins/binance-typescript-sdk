import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV3MyAllocationsResponse = {
  symbol: string;
  allocationId: number;
  allocationType: string;
  orderId: number;
  orderListId: number;
  price: string;
  qty: string;
  quoteQty: string;
  commission: string;
  commissionAsset: string;
  time: number;
  isBuyer: boolean;
  isMaker: boolean;
  isAllocator: boolean;
};

export const apiV3MyAllocationsResponseSchema: Schema<ApiV3MyAllocationsResponse> =
  s.object<ApiV3MyAllocationsResponse>({
    symbol: s.string(),
    allocationId: s.int(),
    allocationType: s.string(),
    orderId: s.int(),
    orderListId: s.int(),
    price: s.string(),
    qty: s.string(),
    quoteQty: s.string(),
    commission: s.string(),
    commissionAsset: s.string(),
    time: s.int(),
    isBuyer: s.boolean(),
    isMaker: s.boolean(),
    isAllocator: s.boolean(),
  });
