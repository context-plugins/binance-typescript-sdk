import { s, type EnumSchema } from "../core/index.js";

export const Type = {
  Full: "FULL",
  Mini: "MINI",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
