import { s, type EnumSchema } from "../core/index.js";

export const SourceType = {
  MainSite: "MAIN_SITE",
  Tr: "TR",
} as const;
export type SourceType = (typeof SourceType)[keyof typeof SourceType] | (string & {});

export const sourceTypeSchema: EnumSchema<SourceType> = s.enumOf<SourceType>(SourceType);
