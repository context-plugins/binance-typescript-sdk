import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InterestBnbBurn = {
  True: "true",
  False: "false",
} as const;
export type InterestBnbBurn = (typeof InterestBnbBurn)[keyof typeof InterestBnbBurn] | (string & {});

export const interestBnbBurnSchema: EnumSchema<InterestBnbBurn> = s.enumOf<InterestBnbBurn>(InterestBnbBurn);
