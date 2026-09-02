import { s, type EnumSchema } from "../core/index.js";

export const Type4 = {
  Margin: "MARGIN",
  Isolated: "ISOLATED",
} as const;
export type Type4 = (typeof Type4)[keyof typeof Type4] | (string & {});

export const type4Schema: EnumSchema<Type4> = s.enumOf<Type4>(Type4);
