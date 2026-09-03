import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detail3Schema, type Detail3 } from "./detail3.js";

export type Plan1 = {
  planId: number;
  planType: string;
  editAllowed: string;
  flexibleAllowedToUse: string;
  creationDateTime: number;
  firstExecutionDateTime: number;
  nextExecutionDateTime: number;
  status: string;
  targetAsset: string;
  sourceAsset: string;
  totalInvestedInUsd: string;
  planValueInUsd: string;
  pnlInUsd: string;
  roi: string;
  details: Detail3[];
};

export const plan1Schema: Schema<Plan1> = s.object<Plan1>({
  planId: s.number(),
  planType: s.string(),
  editAllowed: s.string(),
  flexibleAllowedToUse: s.string(),
  creationDateTime: s.number(),
  firstExecutionDateTime: s.number(),
  nextExecutionDateTime: s.number(),
  status: s.string(),
  targetAsset: s.string(),
  sourceAsset: s.string(),
  totalInvestedInUsd: s.string(),
  planValueInUsd: s.string(),
  pnlInUsd: s.string(),
  roi: s.string(),
  details: s.array(s.lazy(() => detail3Schema)),
  _keysMap: {
    totalInvestedInUsd: "totalInvestedInUSD",
    planValueInUsd: "planValueInUSD",
    pnlInUsd: "pnlInUSD",
  },
});
