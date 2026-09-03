import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Urgency = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type Urgency = (typeof Urgency)[keyof typeof Urgency] | (string & {});

export const urgencySchema: EnumSchema<Urgency> = s.enumOf<Urgency>(Urgency);
