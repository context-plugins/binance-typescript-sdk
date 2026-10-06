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
  /**
   * NORMAL for normal subscription, AUTO for auto-subscription order, ACTIVITY for activity order,
   * TRIAL for trial fund order, RESTAKE for restake order
   */
  type: string;
  /** SPOT, FUNDING, SPOTANDFUNDING */
  sourceAccount: string;
  /** Display if sourceAccount is SPOTANDFUNDING */
  amtFromSpot: string;
  /** Display if sourceAccount is SPOTANDFUNDING */
  amtFromFunding: string;
  /** PURCHASING/SUCCESS/FAILED */
  status: string;
};

export const row43Schema: Schema<Row43> = s.object<Row43>({
  positionId: s.string(),
  purchaseId: s.int(),
  projectId: s.string(),
  time: s.int(),
  asset: s.string(),
  amount: s.string(),
  lockPeriod: s.string(),
  type: s.string(),
  sourceAccount: s.string(),
  amtFromSpot: s.string(),
  amtFromFunding: s.string(),
  status: s.string(),
});
