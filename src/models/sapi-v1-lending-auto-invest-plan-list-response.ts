import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { planSchema, type Plan } from "./plan.js";

export type SapiV1LendingAutoInvestPlanListResponse = {
  planValueInUsd: string;
  planValueInBtc: string;
  pnlInUsd: string;
  roi: string;
  plan: Plan[];
};

export const sapiV1LendingAutoInvestPlanListResponseSchema: Schema<SapiV1LendingAutoInvestPlanListResponse> =
  s.object<SapiV1LendingAutoInvestPlanListResponse>({
    planValueInUsd: s.string(),
    planValueInBtc: s.string(),
    pnlInUsd: s.string(),
    roi: s.string(),
    plan: s.array(s.lazy(() => planSchema)),
    _keysMap: {
      planValueInUsd: "planValueInUSD",
      planValueInBtc: "planValueInBTC",
      pnlInUsd: "pnlInUSD",
    },
  });
