import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1EthStakingEthQuotaResponse = {
  leftStakingPersonalQuota: string;
  leftRedemptionPersonalQuota: string;
};

export const sapiV1EthStakingEthQuotaResponseSchema: Schema<SapiV1EthStakingEthQuotaResponse> =
  s.object<SapiV1EthStakingEthQuotaResponse>({
    leftStakingPersonalQuota: s.string(),
    leftRedemptionPersonalQuota: s.string(),
  });
