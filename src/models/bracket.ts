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
  leverage: s.optional(s.number()),
  maxDebt: s.optional(s.number()),
  maintenanceMarginRate: s.optional(s.number()),
  initialMarginRate: s.optional(s.number()),
  fastNum: s.optional(s.number()),
});
