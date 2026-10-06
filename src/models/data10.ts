import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data10 = {
  coinName: string;
  coinId: number;
  poolIndex: number;
  algoId: number;
  algoName: string;
};

export const data10Schema: Schema<Data10> = s.object<Data10>({
  coinName: s.string(),
  coinId: s.int(),
  poolIndex: s.int(),
  algoId: s.int(),
  algoName: s.string(),
});
