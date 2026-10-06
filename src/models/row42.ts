import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row42 = {
  amount: string;
  asset: string;
  time: number;
  purchaseId: number;
  productId: string;
  /**
   * AUTO for auto subscribe, NORMAL for normal subscription, CONVERT for Locked to Flexible, LOAN
   * for flexible loan collateral, AI for Auto Invest subscribe, TRANSFER for Locked Savings to
   * Flexible
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

export const row42Schema: Schema<Row42> = s.object<Row42>({
  amount: s.string(),
  asset: s.string(),
  time: s.int(),
  purchaseId: s.int(),
  productId: s.string(),
  type: s.string(),
  sourceAccount: s.string(),
  amtFromSpot: s.string(),
  amtFromFunding: s.string(),
  status: s.string(),
});
