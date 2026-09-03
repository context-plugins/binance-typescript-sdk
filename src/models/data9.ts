import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data9 = {
  algoName: string;
  algoId: number;
  poolIndex: number;
  unit: string;
};

export const data9Schema: Schema<Data9> = s.object<Data9>({
  algoName: s.string(),
  algoId: s.number(),
  poolIndex: s.number(),
  unit: s.string(),
});
