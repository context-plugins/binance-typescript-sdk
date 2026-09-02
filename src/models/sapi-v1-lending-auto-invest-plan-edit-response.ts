import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestPlanEditResponse = {
  planId: number;
  nextExecutionDateTime: number;
};

export const sapiV1LendingAutoInvestPlanEditResponseSchema: Schema<SapiV1LendingAutoInvestPlanEditResponse> =
  s.object<SapiV1LendingAutoInvestPlanEditResponse>({
    planId: s.number(),
    nextExecutionDateTime: s.number(),
  });
