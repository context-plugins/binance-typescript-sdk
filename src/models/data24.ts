import { s, type Schema } from "../core/index.js";

export type Data24 = {
  asset: string;
  type: number;
  amount: string;
  updateTime: number;
};

export const data24Schema: Schema<Data24> = s.object<Data24>({
  asset: s.string(),
  type: s.number(),
  amount: s.string(),
  updateTime: s.number(),
});
