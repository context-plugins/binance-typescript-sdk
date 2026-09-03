import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LendingAutoInvestRedeemResponse = {
  redemptionId: number;
};

export const sapiV1LendingAutoInvestRedeemResponseSchema: Schema<SapiV1LendingAutoInvestRedeemResponse> =
  s.object<SapiV1LendingAutoInvestRedeemResponse>({
    redemptionId: s.number(),
  });
