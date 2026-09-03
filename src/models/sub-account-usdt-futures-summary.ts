import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  futureAccountSummaryRespSchema,
  type FutureAccountSummaryResp,
} from "./future-account-summary-resp.js";

export type SubAccountUsdtFuturesSummary = {
  futureAccountSummaryResp: FutureAccountSummaryResp;
};

export const subAccountUsdtFuturesSummarySchema: Schema<SubAccountUsdtFuturesSummary> =
  s.object<SubAccountUsdtFuturesSummary>({
    futureAccountSummaryResp: futureAccountSummaryRespSchema,
  });
