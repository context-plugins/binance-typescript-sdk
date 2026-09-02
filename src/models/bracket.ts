import { s, type Schema } from "../core/index.js";

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
