import { s, type EnumSchema } from "../core/index.js";

export const Direction = {
  Additional: "ADDITIONAL",
  Reduced: "REDUCED",
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction] | (string & {});

export const directionSchema: EnumSchema<Direction> = s.enumOf<Direction>(Direction);
