import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OptionType = {
  Call: "CALL",
  Put: "PUT",
} as const;
export type OptionType = (typeof OptionType)[keyof typeof OptionType] | (string & {});

export const optionTypeSchema: EnumSchema<OptionType> = s.enumOf<OptionType>(OptionType);
