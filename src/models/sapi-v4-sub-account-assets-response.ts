import { s, type Schema } from "../core/index.js";
import { balanceSchema, type Balance } from "./balance.js";

export type SapiV4SubAccountAssetsResponse = {
  balances: Balance[];
};

export const sapiV4SubAccountAssetsResponseSchema: Schema<SapiV4SubAccountAssetsResponse> =
  s.object<SapiV4SubAccountAssetsResponse>({
    balances: s.array(s.lazy(() => balanceSchema)),
  });
