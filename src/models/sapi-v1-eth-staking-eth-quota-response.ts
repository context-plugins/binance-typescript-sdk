import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1EthStakingEthQuotaResponse = {
  /** Show min(Daily available limit, total personal staking quota) */
  leftStakingPersonalQuota: string;
  /** Show min(Daily personal redeem quota, total redemption limit) */
  leftRedemptionPersonalQuota: string;
};

export const sapiV1EthStakingEthQuotaResponseSchema: Schema<SapiV1EthStakingEthQuotaResponse> =
  s.object<SapiV1EthStakingEthQuotaResponse>({
    leftStakingPersonalQuota: s.string(),
    leftRedemptionPersonalQuota: s.string(),
  });
