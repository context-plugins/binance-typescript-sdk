import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestRedeemResponse = {
  redemptionId: number;
};

export const sapiV1LendingAutoInvestRedeemResponseSchema: Schema<SapiV1LendingAutoInvestRedeemResponse> =
  s.object<SapiV1LendingAutoInvestRedeemResponse>({
    redemptionId: s.number(),
  });
