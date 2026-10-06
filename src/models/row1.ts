import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row1 = {
  /** Isolated symbol, will not be returned for crossed margin */
  isolatedSymbol?: string;
  /** Total amount borrowed/repaid */
  amount?: string;
  asset: string;
  /** Interest repaid */
  interest?: string;
  /** Principal repaid */
  principal: string;
  /**
   * one of PENDING (pending execution), CONFIRMED (successfully execution), FAILED (execution
   * failed, nothing happened to your account)
   */
  status: string;
  timestamp: number;
  txId: number;
};

export const row1Schema: Schema<Row1> = s.object<Row1>({
  isolatedSymbol: s.optional(s.string()),
  amount: s.optional(s.string()),
  asset: s.string(),
  interest: s.optional(s.string()),
  principal: s.string(),
  status: s.string(),
  timestamp: s.int(),
  txId: s.int(),
});
