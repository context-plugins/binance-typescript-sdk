import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SpotBnbBurn = {
  True: "true",
  False: "false",
} as const;
export type SpotBnbBurn = (typeof SpotBnbBurn)[keyof typeof SpotBnbBurn] | (string & {});

export const spotBnbBurnSchema: EnumSchema<SpotBnbBurn> = s.enumOf<SpotBnbBurn>(SpotBnbBurn);
