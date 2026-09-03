import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NeedBtcValuation = {
  True: "true",
  False: "false",
} as const;
export type NeedBtcValuation = (typeof NeedBtcValuation)[keyof typeof NeedBtcValuation] | (string & {});

export const needBtcValuationSchema: EnumSchema<NeedBtcValuation> =
  s.enumOf<NeedBtcValuation>(NeedBtcValuation);
