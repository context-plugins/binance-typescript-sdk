import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV2EthStakingEthStakeResponse = {
  success: boolean;
  wbethAmount: string;
  /** ETH amount per 1 WBETH */
  conversionRatio: string;
};

export const sapiV2EthStakingEthStakeResponseSchema: Schema<SapiV2EthStakingEthStakeResponse> =
  s.object<SapiV2EthStakingEthStakeResponse>({
    success: s.boolean(),
    wbethAmount: s.string(),
    conversionRatio: s.string(),
  });
