import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Profit = {
  amountFromWbeth: string;
  amountFromBeth: string;
};

export const profitSchema: Schema<Profit> = s.object<Profit>({
  amountFromWbeth: s.string(),
  amountFromBeth: s.string(),
  _keysMap: {
    amountFromWbeth: "amountFromWBETH",
    amountFromBeth: "amountFromBETH",
  },
});
