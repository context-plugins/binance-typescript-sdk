import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AccountApiRestrictionsResponse = {
  ipRestrict: boolean;
  createTime: number;
  /**
   * This option authorizes this key to transfer funds between your master account and your sub
   * account instantly
   */
  enableInternalTransfer: boolean;
  /** API Key created before your futures account opened does not support futures API service */
  enableFutures: boolean;
  /**
   * API Key created before your activate portfolio margin does not support portfolio margin API
   * service
   */
  enablePortfolioMarginTrading?: boolean;
  /** Authorizes this key to Vanilla options trading */
  enableVanillaOptions: boolean;
  /**
   * Authorizes this key to be used for a dedicated universal transfer API to transfer multiple
   * supported currencies. Each business's own transfer API rights are not affected by this
   * authorization
   */
  permitsUniversalTransfer: boolean;
  enableReading: boolean;
  enableSpotAndMarginTrading: boolean;
  /**
   * This option allows you to withdraw via API. You must apply the IP Access Restriction filter in
   * order to enable withdrawals
   */
  enableWithdrawals: boolean;
  /** This option can be adjusted after the Cross Margin account transfer is completed */
  enableMargin: boolean;
  /** Expiration time for spot and margin trading permission */
  tradingAuthorityExpirationTime: number;
};

export const sapiV1AccountApiRestrictionsResponseSchema: Schema<SapiV1AccountApiRestrictionsResponse> =
  s.object<SapiV1AccountApiRestrictionsResponse>({
    ipRestrict: s.boolean(),
    createTime: s.int(),
    enableInternalTransfer: s.boolean(),
    enableFutures: s.boolean(),
    enablePortfolioMarginTrading: s.optional(s.boolean()),
    enableVanillaOptions: s.boolean(),
    permitsUniversalTransfer: s.boolean(),
    enableReading: s.boolean(),
    enableSpotAndMarginTrading: s.boolean(),
    enableWithdrawals: s.boolean(),
    enableMargin: s.boolean(),
    tradingAuthorityExpirationTime: s.int(),
  });
