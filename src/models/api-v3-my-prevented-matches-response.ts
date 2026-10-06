import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV3MyPreventedMatchesResponse = {
  symbol: string;
  preventedMatchId: number;
  takerOrderId: number;
  makerOrderId: number;
  tradeGroupId: number;
  selfTradePreventionMode: string;
  price: string;
  makerPreventedQuantity: string;
  transactTime: number;
};

export const apiV3MyPreventedMatchesResponseSchema: Schema<ApiV3MyPreventedMatchesResponse> =
  s.object<ApiV3MyPreventedMatchesResponse>({
    symbol: s.string(),
    preventedMatchId: s.int(),
    takerOrderId: s.int(),
    makerOrderId: s.int(),
    tradeGroupId: s.int(),
    selfTradePreventionMode: s.string(),
    price: s.string(),
    makerPreventedQuantity: s.string(),
    transactTime: s.int(),
  });
