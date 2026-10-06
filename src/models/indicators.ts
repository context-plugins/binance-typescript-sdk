import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { btcusdtSchema, type Btcusdt } from "./btcusdt.js";

/** The indicators updated every 30 seconds */
export type Indicators = {
  btcusdt: Btcusdt[];
};

export const indicatorsSchema: Schema<Indicators> = s.object<Indicators>({
  btcusdt: s.array(s.lazy(() => btcusdtSchema)),
  _keysMap: {
    btcusdt: "BTCUSDT",
  },
});
