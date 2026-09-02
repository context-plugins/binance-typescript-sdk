import { s, type Schema } from "../core/index.js";

export type Row44 = {
  amount: string;
  asset: string;
  time: number;
  projectId: string;
  redeemId: number;
  destAccount: string;
  status: string;
};

export const row44Schema: Schema<Row44> = s.object<Row44>({
  amount: s.string(),
  asset: s.string(),
  time: s.number(),
  projectId: s.string(),
  redeemId: s.number(),
  destAccount: s.string(),
  status: s.string(),
});
