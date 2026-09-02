import { s, type Schema } from "../core/index.js";
import { tradeInfoVoSchema, type TradeInfoVo } from "./trade-info-vo.js";

export type SapiV1SubAccountTransactionStatisticsResponse = {
  recent30BtcTotal: string;
  recent30BtcFuturesTotal: string;
  recent30BtcMarginTotal: string;
  recent30BusdTotal: string;
  recent30BusdFuturesTotal: string;
  recent30BusdMarginTotal: string;
  tradeInfoVos: TradeInfoVo[];
};

export const sapiV1SubAccountTransactionStatisticsResponseSchema: Schema<SapiV1SubAccountTransactionStatisticsResponse> =
  s.object<SapiV1SubAccountTransactionStatisticsResponse>({
    recent30BtcTotal: s.string(),
    recent30BtcFuturesTotal: s.string(),
    recent30BtcMarginTotal: s.string(),
    recent30BusdTotal: s.string(),
    recent30BusdFuturesTotal: s.string(),
    recent30BusdMarginTotal: s.string(),
    tradeInfoVos: s.array(s.lazy(() => tradeInfoVoSchema)),
  });
