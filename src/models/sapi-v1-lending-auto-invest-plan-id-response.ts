import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plan1Schema, type Plan1 } from "./plan1.js";

export type SapiV1LendingAutoInvestPlanIdResponse = {
  planValueInUsd?: string;
  planValueInBtc?: string;
  pnlInUsd?: string;
  roi?: string;
  plan?: Plan1[];
};

export const sapiV1LendingAutoInvestPlanIdResponseSchema: Schema<SapiV1LendingAutoInvestPlanIdResponse> =
  s.object<SapiV1LendingAutoInvestPlanIdResponse>({
    planValueInUsd: s.optional(s.string()),
    planValueInBtc: s.optional(s.string()),
    pnlInUsd: s.optional(s.string()),
    roi: s.optional(s.string()),
    plan: s.optional(s.array(s.lazy(() => plan1Schema))),
    _keysMap: {
      planValueInUsd: "planValueInUSD",
      planValueInBtc: "planValueInBTC",
      pnlInUsd: "pnlInUSD",
    },
  });
