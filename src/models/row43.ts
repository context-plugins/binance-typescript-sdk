import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row43 = {
  positionId: string;
  purchaseId: number;
  projectId: string;
  time: number;
  asset: string;
  amount: string;
  lockPeriod: string;
  type: string;
  sourceAccount: string;
  amtFromSpot: string;
  amtFromFunding: string;
  status: string;
};

export const row43Schema: Schema<Row43> = s.object<Row43>({
  positionId: s.string(),
  purchaseId: s.number(),
  projectId: s.string(),
  time: s.number(),
  asset: s.string(),
  amount: s.string(),
  lockPeriod: s.string(),
  type: s.string(),
  sourceAccount: s.string(),
  amtFromSpot: s.string(),
  amtFromFunding: s.string(),
  status: s.string(),
});
