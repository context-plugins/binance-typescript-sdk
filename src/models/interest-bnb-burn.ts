import { s, type EnumSchema } from "../core/index.js";

export const InterestBnbBurn = {
  True: "true",
  False: "false",
} as const;
export type InterestBnbBurn = (typeof InterestBnbBurn)[keyof typeof InterestBnbBurn] | (string & {});

export const interestBnbBurnSchema: EnumSchema<InterestBnbBurn> = s.enumOf<InterestBnbBurn>(InterestBnbBurn);
