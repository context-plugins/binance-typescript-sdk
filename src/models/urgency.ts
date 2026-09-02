import { s, type EnumSchema } from "../core/index.js";

export const Urgency = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type Urgency = (typeof Urgency)[keyof typeof Urgency] | (string & {});

export const urgencySchema: EnumSchema<Urgency> = s.enumOf<Urgency>(Urgency);
