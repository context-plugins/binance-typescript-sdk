import { s, type EnumSchema } from "../core/index.js";

export const Type2 = {
  RollIn: "ROLL_IN",
  RollOut: "ROLL_OUT",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
