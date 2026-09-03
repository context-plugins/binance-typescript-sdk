import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExpiredType = {
  _1D: "1_D",
  _3D: "3_D",
  _7D: "7_D",
  _30D: "30_D",
} as const;
export type ExpiredType = (typeof ExpiredType)[keyof typeof ExpiredType] | (string & {});

export const expiredTypeSchema: EnumSchema<ExpiredType> = s.enumOf<ExpiredType>(ExpiredType);
