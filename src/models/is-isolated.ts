import { s, type EnumSchema } from "../core/index.js";

export const IsIsolated = {
  True: "TRUE",
  False: "FALSE",
} as const;
export type IsIsolated = (typeof IsIsolated)[keyof typeof IsIsolated] | (string & {});

export const isIsolatedSchema: EnumSchema<IsIsolated> = s.enumOf<IsIsolated>(IsIsolated);
