import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
