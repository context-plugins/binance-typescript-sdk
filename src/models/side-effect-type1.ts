import { s, type EnumSchema } from "../core/index.js";

export const SideEffectType1 = {
  NoSideEffect: "NO_SIDE_EFFECT",
  MarginBuy: "MARGIN_BUY",
} as const;
export type SideEffectType1 = (typeof SideEffectType1)[keyof typeof SideEffectType1] | (string & {});

export const sideEffectType1Schema: EnumSchema<SideEffectType1> = s.enumOf<SideEffectType1>(SideEffectType1);
