import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestPlanEditStatusResponse = {
  planId: number;
  nextExecutionDateTime: number;
  status: string;
};

export const sapiV1LendingAutoInvestPlanEditStatusResponseSchema: Schema<SapiV1LendingAutoInvestPlanEditStatusResponse> =
  s.object<SapiV1LendingAutoInvestPlanEditStatusResponse>({
    planId: s.number(),
    nextExecutionDateTime: s.number(),
    status: s.string(),
  });
