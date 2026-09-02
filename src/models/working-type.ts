import { s, type EnumSchema } from "../core/index.js";

export const WorkingType = {
  Limit: "LIMIT",
  LimitMaker: "LIMIT_MAKER",
} as const;
export type WorkingType = (typeof WorkingType)[keyof typeof WorkingType] | (string & {});

export const workingTypeSchema: EnumSchema<WorkingType> = s.enumOf<WorkingType>(WorkingType);
