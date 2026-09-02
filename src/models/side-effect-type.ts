import { s, type EnumSchema } from "../core/index.js";

export const SideEffectType = {
  NoSideEffect: "NO_SIDE_EFFECT",
  MarginBuy: "MARGIN_BUY",
  AutoRepay: "AUTO_REPAY",
} as const;
export type SideEffectType = (typeof SideEffectType)[keyof typeof SideEffectType] | (string & {});

export const sideEffectTypeSchema: EnumSchema<SideEffectType> = s.enumOf<SideEffectType>(SideEffectType);
