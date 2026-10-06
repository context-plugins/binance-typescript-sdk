import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LendingAutoInvestPlanEditResponse = {
  planId: number;
  nextExecutionDateTime: number;
};

export const sapiV1LendingAutoInvestPlanEditResponseSchema: Schema<SapiV1LendingAutoInvestPlanEditResponse> =
  s.object<SapiV1LendingAutoInvestPlanEditResponse>({
    planId: s.int(),
    nextExecutionDateTime: s.int(),
  });
