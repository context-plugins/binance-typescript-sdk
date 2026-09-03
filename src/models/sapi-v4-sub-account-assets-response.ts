import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceSchema, type Balance } from "./balance.js";

export type SapiV4SubAccountAssetsResponse = {
  balances: Balance[];
};

export const sapiV4SubAccountAssetsResponseSchema: Schema<SapiV4SubAccountAssetsResponse> =
  s.object<SapiV4SubAccountAssetsResponse>({
    balances: s.array(s.lazy(() => balanceSchema)),
  });
