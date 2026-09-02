import { s, type Schema } from "../core/index.js";

export type Data30 = {
  isLeadTrader: boolean;
  time: number;
};

export const data30Schema: Schema<Data30> = s.object<Data30>({
  isLeadTrader: s.boolean(),
  time: s.number(),
});
