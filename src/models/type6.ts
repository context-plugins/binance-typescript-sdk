import { s, type EnumSchema } from "../core/index.js";

export const Type6 = {
  Spot: "SPOT",
  Margin: "MARGIN",
  Futures: "FUTURES",
} as const;
export type Type6 = (typeof Type6)[keyof typeof Type6] | (string & {});

export const type6Schema: EnumSchema<Type6> = s.enumOf<Type6>(Type6);
