import { s, type Schema } from "../core/index.js";

export type SapiV2EthStakingEthStakeResponse = {
  success: boolean;
  wbethAmount: string;
  conversionRatio: string;
};

export const sapiV2EthStakingEthStakeResponseSchema: Schema<SapiV2EthStakingEthStakeResponse> =
  s.object<SapiV2EthStakingEthStakeResponse>({
    success: s.boolean(),
    wbethAmount: s.string(),
    conversionRatio: s.string(),
  });
