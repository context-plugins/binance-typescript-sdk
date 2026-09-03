import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PositionSide = {
  Both: "BOTH",
  Long: "LONG",
  Short: "SHORT",
} as const;
export type PositionSide = (typeof PositionSide)[keyof typeof PositionSide] | (string & {});

export const positionSideSchema: EnumSchema<PositionSide> = s.enumOf<PositionSide>(PositionSide);
