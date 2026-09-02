import { s, type Schema } from "../core/index.js";

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
    preventedMatchId: s.number(),
    takerOrderId: s.number(),
    makerOrderId: s.number(),
    tradeGroupId: s.number(),
    selfTradePreventionMode: s.string(),
    price: s.string(),
    makerPreventedQuantity: s.string(),
    transactTime: s.number(),
  });
