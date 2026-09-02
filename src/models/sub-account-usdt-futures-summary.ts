import { s, type Schema } from "../core/index.js";
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
