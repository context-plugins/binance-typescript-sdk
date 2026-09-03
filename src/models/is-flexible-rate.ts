import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IsFlexibleRate = {
  True: "TRUE",
  False: "FALSE",
} as const;
export type IsFlexibleRate = (typeof IsFlexibleRate)[keyof typeof IsFlexibleRate] | (string & {});

export const isFlexibleRateSchema: EnumSchema<IsFlexibleRate> = s.enumOf<IsFlexibleRate>(IsFlexibleRate);
