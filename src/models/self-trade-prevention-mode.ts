import { s, type EnumSchema } from "../core/index.js";

export const SelfTradePreventionMode = {
  ExpireTaker: "EXPIRE_TAKER",
  ExpireMaker: "EXPIRE_MAKER",
  ExpireBoth: "EXPIRE_BOTH",
  None: "NONE",
} as const;
export type SelfTradePreventionMode =
  | (typeof SelfTradePreventionMode)[keyof typeof SelfTradePreventionMode]
  | (string & {});

export const selfTradePreventionModeSchema: EnumSchema<SelfTradePreventionMode> =
  s.enumOf<SelfTradePreventionMode>(SelfTradePreventionMode);
