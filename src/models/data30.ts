import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data30 = {
  isLeadTrader: boolean;
  time: number;
};

export const data30Schema: Schema<Data30> = s.object<Data30>({
  isLeadTrader: s.boolean(),
  time: s.number(),
});
