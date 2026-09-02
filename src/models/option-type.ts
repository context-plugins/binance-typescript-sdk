import { s, type EnumSchema } from "../core/index.js";

export const OptionType = {
  Call: "CALL",
  Put: "PUT",
} as const;
export type OptionType = (typeof OptionType)[keyof typeof OptionType] | (string & {});

export const optionTypeSchema: EnumSchema<OptionType> = s.enumOf<OptionType>(OptionType);
