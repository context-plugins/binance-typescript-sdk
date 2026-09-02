import { s, type Schema } from "../../core/index.js";
import {
  subAccountCoinFuturesSummarySchema,
  type SubAccountCoinFuturesSummary,
} from "../sub-account-coin-futures-summary.js";
import {
  subAccountUsdtFuturesSummarySchema,
  type SubAccountUsdtFuturesSummary,
} from "../sub-account-usdt-futures-summary.js";

export type SapiV2SubAccountFuturesAccountSummaryResponse =
  | SubAccountUsdtFuturesSummary
  | SubAccountCoinFuturesSummary;

export const sapiV2SubAccountFuturesAccountSummaryResponseSchema: Schema<SapiV2SubAccountFuturesAccountSummaryResponse> =
  s.of<SapiV2SubAccountFuturesAccountSummaryResponse>(
    s.union([
      s.lazy(() => subAccountUsdtFuturesSummarySchema),
      s.lazy(() => subAccountCoinFuturesSummarySchema),
    ]),
  );
