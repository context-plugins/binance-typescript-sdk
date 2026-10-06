import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LendingAutoInvestPlanAddResponse = {
  planId: number;
  nextExecutionDateTime: number;
};

export const sapiV1LendingAutoInvestPlanAddResponseSchema: Schema<SapiV1LendingAutoInvestPlanAddResponse> =
  s.object<SapiV1LendingAutoInvestPlanAddResponse>({
    planId: s.int(),
    nextExecutionDateTime: s.int(),
  });
