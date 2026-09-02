import { s, type Schema } from "../core/index.js";

export type Row10 = {
  clientTranId: string;
  transferType: string;
  asset: string;
  amount: string;
  time: number;
};

export const row10Schema: Schema<Row10> = s.object<Row10>({
  clientTranId: s.string(),
  transferType: s.string(),
  asset: s.string(),
  amount: s.string(),
  time: s.number(),
});
