import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1EthStakingEthRedeemResponse = {
  success: boolean;
  arrivalTime: number;
  ethAmount: string;
  conversionRatio: string;
};

export const sapiV1EthStakingEthRedeemResponseSchema: Schema<SapiV1EthStakingEthRedeemResponse> =
  s.object<SapiV1EthStakingEthRedeemResponse>({
    success: s.boolean(),
    arrivalTime: s.number(),
    ethAmount: s.string(),
    conversionRatio: s.string(),
  });
