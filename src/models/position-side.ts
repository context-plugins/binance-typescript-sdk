import { s, type EnumSchema } from "../core/index.js";

export const PositionSide = {
  Both: "BOTH",
  Long: "LONG",
  Short: "SHORT",
} as const;
export type PositionSide = (typeof PositionSide)[keyof typeof PositionSide] | (string & {});

export const positionSideSchema: EnumSchema<PositionSide> = s.enumOf<PositionSide>(PositionSide);
