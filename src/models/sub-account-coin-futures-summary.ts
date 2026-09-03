import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
