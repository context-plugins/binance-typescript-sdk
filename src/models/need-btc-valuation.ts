import { s, type EnumSchema } from "../core/index.js";

export const NeedBtcValuation = {
  True: "true",
  False: "false",
} as const;
export type NeedBtcValuation = (typeof NeedBtcValuation)[keyof typeof NeedBtcValuation] | (string & {});

export const needBtcValuationSchema: EnumSchema<NeedBtcValuation> =
  s.enumOf<NeedBtcValuation>(NeedBtcValuation);
