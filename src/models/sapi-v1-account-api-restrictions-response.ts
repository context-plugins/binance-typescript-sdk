import { s, type Schema } from "../core/index.js";

export type SapiV1AccountApiRestrictionsResponse = {
  ipRestrict: boolean;
  createTime: number;
  enableInternalTransfer: boolean;
  enableFutures: boolean;
  enablePortfolioMarginTrading?: boolean;
  enableVanillaOptions: boolean;
  permitsUniversalTransfer: boolean;
  enableReading: boolean;
  enableSpotAndMarginTrading: boolean;
  enableWithdrawals: boolean;
  enableMargin: boolean;
  tradingAuthorityExpirationTime: number;
};

export const sapiV1AccountApiRestrictionsResponseSchema: Schema<SapiV1AccountApiRestrictionsResponse> =
  s.object<SapiV1AccountApiRestrictionsResponse>({
    ipRestrict: s.boolean(),
    createTime: s.number(),
    enableInternalTransfer: s.boolean(),
    enableFutures: s.boolean(),
    enablePortfolioMarginTrading: s.optional(s.boolean()),
    enableVanillaOptions: s.boolean(),
    permitsUniversalTransfer: s.boolean(),
    enableReading: s.boolean(),
    enableSpotAndMarginTrading: s.boolean(),
    enableWithdrawals: s.boolean(),
    enableMargin: s.boolean(),
    tradingAuthorityExpirationTime: s.number(),
  });
