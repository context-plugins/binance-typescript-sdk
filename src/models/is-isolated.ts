import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IsIsolated = {
  True: "TRUE",
  False: "FALSE",
} as const;
export type IsIsolated = (typeof IsIsolated)[keyof typeof IsIsolated] | (string & {});

export const isIsolatedSchema: EnumSchema<IsIsolated> = s.enumOf<IsIsolated>(IsIsolated);
