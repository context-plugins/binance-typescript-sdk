import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WorkingType = {
  Limit: "LIMIT",
  LimitMaker: "LIMIT_MAKER",
} as const;
export type WorkingType = (typeof WorkingType)[keyof typeof WorkingType] | (string & {});

export const workingTypeSchema: EnumSchema<WorkingType> = s.enumOf<WorkingType>(WorkingType);
