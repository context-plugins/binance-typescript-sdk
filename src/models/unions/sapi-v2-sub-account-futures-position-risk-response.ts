import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subAccountCoinFuturesPositionRiskSchema,
  type SubAccountCoinFuturesPositionRisk,
} from "../sub-account-coin-futures-position-risk.js";
import {
  subAccountUsdtFuturesPositionRiskSchema,
  type SubAccountUsdtFuturesPositionRisk,
} from "../sub-account-usdt-futures-position-risk.js";

export type SapiV2SubAccountFuturesPositionRiskResponse =
  | SubAccountUsdtFuturesPositionRisk
  | SubAccountCoinFuturesPositionRisk;

export const sapiV2SubAccountFuturesPositionRiskResponseSchema: Schema<SapiV2SubAccountFuturesPositionRiskResponse> =
  s.of<SapiV2SubAccountFuturesPositionRiskResponse>(
    s.union([
      s.lazy(() => subAccountUsdtFuturesPositionRiskSchema),
      s.lazy(() => subAccountCoinFuturesPositionRiskSchema),
    ]),
  );
