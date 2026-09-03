import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
