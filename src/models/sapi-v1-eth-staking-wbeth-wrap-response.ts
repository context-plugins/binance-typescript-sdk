import { s, type Schema } from "../core/index.js";

export type SapiV1EthStakingWbethWrapResponse = {
  success: boolean;
  wbethAmount: string;
  exchangeRate: string;
};

export const sapiV1EthStakingWbethWrapResponseSchema: Schema<SapiV1EthStakingWbethWrapResponse> =
  s.object<SapiV1EthStakingWbethWrapResponse>({
    success: s.boolean(),
    wbethAmount: s.string(),
    exchangeRate: s.string(),
  });
