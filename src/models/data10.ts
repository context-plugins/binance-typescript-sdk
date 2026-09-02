import { s, type Schema } from "../core/index.js";

export type Data10 = {
  coinName: string;
  coinId: number;
  poolIndex: number;
  algoId: number;
  algoName: string;
};

export const data10Schema: Schema<Data10> = s.object<Data10>({
  coinName: s.string(),
  coinId: s.number(),
  poolIndex: s.number(),
  algoId: s.number(),
  algoName: s.string(),
});
