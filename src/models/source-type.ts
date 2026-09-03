import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceType = {
  MainSite: "MAIN_SITE",
  Tr: "TR",
} as const;
export type SourceType = (typeof SourceType)[keyof typeof SourceType] | (string & {});

export const sourceTypeSchema: EnumSchema<SourceType> = s.enumOf<SourceType>(SourceType);
