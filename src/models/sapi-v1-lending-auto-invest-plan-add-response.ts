import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestPlanAddResponse = {
  planId: number;
  nextExecutionDateTime: number;
};

export const sapiV1LendingAutoInvestPlanAddResponseSchema: Schema<SapiV1LendingAutoInvestPlanAddResponse> =
  s.object<SapiV1LendingAutoInvestPlanAddResponse>({
    planId: s.number(),
    nextExecutionDateTime: s.number(),
  });
