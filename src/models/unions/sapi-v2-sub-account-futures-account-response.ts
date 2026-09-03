import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subAccountCoinFuturesDetailsSchema,
  type SubAccountCoinFuturesDetails,
} from "../sub-account-coin-futures-details.js";
import {
  subAccountUsdtFuturesDetailsSchema,
  type SubAccountUsdtFuturesDetails,
} from "../sub-account-usdt-futures-details.js";

export type SapiV2SubAccountFuturesAccountResponse =
  | SubAccountUsdtFuturesDetails
  | SubAccountCoinFuturesDetails;

export const sapiV2SubAccountFuturesAccountResponseSchema: Schema<SapiV2SubAccountFuturesAccountResponse> =
  s.of<SapiV2SubAccountFuturesAccountResponse>(
    s.union([
      s.lazy(() => subAccountUsdtFuturesDetailsSchema),
      s.lazy(() => subAccountCoinFuturesDetailsSchema),
    ]),
  );
