import { s, type Schema } from "../core/index.js";
import {
  deliveryAccountSummaryRespSchema,
  type DeliveryAccountSummaryResp,
} from "./delivery-account-summary-resp.js";

export type SubAccountCoinFuturesSummary = {
  deliveryAccountSummaryResp: DeliveryAccountSummaryResp;
};

export const subAccountCoinFuturesSummarySchema: Schema<SubAccountCoinFuturesSummary> =
  s.object<SubAccountCoinFuturesSummary>({
    deliveryAccountSummaryResp: deliveryAccountSummaryRespSchema,
  });
