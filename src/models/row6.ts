import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row6 = {
  id: number;
  amount: string;
  asset: string;
  divTime: number;
  enInfo: string;
  tranId: number;
};

export const row6Schema: Schema<Row6> = s.object<Row6>({
  id: s.number(),
  amount: s.string(),
  asset: s.string(),
  divTime: s.number(),
  enInfo: s.string(),
  tranId: s.number(),
});
