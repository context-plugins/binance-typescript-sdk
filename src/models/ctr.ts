import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Ctr = {
  minWithdrawAmount: string;
  /** deposit status (false if ALL of networks' are false) */
  depositStatus: boolean;
  withdrawFee: number;
  /** withdrawStatus status (false if ALL of networks' are false) */
  withdrawStatus: boolean;
  depositTip: string;
};

export const ctrSchema: Schema<Ctr> = s.object<Ctr>({
  minWithdrawAmount: s.string(),
  depositStatus: s.boolean(),
  withdrawFee: s.int(),
  withdrawStatus: s.boolean(),
  depositTip: s.string(),
});
