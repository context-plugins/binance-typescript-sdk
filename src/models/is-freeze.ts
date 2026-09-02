import { s, type EnumSchema } from "../core/index.js";

export const IsFreeze = {
  True: "true",
  False: "false",
} as const;
export type IsFreeze = (typeof IsFreeze)[keyof typeof IsFreeze] | (string & {});

export const isFreezeSchema: EnumSchema<IsFreeze> = s.enumOf<IsFreeze>(IsFreeze);
