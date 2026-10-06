import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Bracket = {
  leverage?: number;
  maxDebt?: number;
  maintenanceMarginRate?: number;
  initialMarginRate?: number;
  fastNum?: number;
};

export const bracketSchema: Schema<Bracket> = s.object<Bracket>({
  leverage: s.optional(s.int()),
  maxDebt: s.optional(s.float64()),
  maintenanceMarginRate: s.optional(s.float64()),
  initialMarginRate: s.optional(s.float64()),
  fastNum: s.optional(s.float64()),
});
