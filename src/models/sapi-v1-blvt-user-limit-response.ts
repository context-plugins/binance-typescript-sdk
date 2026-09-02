import { s, type Schema } from "../core/index.js";

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
