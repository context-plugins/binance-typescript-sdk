import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
