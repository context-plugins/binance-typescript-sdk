import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BnbBurnStatus = {
  spotBnbBurn: boolean;
  interestBnbBurn: boolean;
};

export const bnbBurnStatusSchema: Schema<BnbBurnStatus> = s.object<BnbBurnStatus>({
  spotBnbBurn: s.boolean(),
  interestBnbBurn: s.boolean(),
  _keysMap: {
    spotBnbBurn: "spotBNBBurn",
    interestBnbBurn: "interestBNBBurn",
  },
});
