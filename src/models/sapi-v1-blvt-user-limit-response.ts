import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1BlvtUserLimitResponse = {
  tokenName: string;
  userDailyTotalPurchaseLimit: string;
  userDailyTotalRedeemLimit: string;
};

export const sapiV1BlvtUserLimitResponseSchema: Schema<SapiV1BlvtUserLimitResponse> =
  s.object<SapiV1BlvtUserLimitResponse>({
    tokenName: s.string(),
    userDailyTotalPurchaseLimit: s.string(),
    userDailyTotalRedeemLimit: s.string(),
  });
