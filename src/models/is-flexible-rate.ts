import { s, type EnumSchema } from "../core/index.js";

export const IsFlexibleRate = {
  True: "TRUE",
  False: "FALSE",
} as const;
export type IsFlexibleRate = (typeof IsFlexibleRate)[keyof typeof IsFlexibleRate] | (string & {});

export const isFlexibleRateSchema: EnumSchema<IsFlexibleRate> = s.enumOf<IsFlexibleRate>(IsFlexibleRate);
