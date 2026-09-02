import { s, type Schema } from "../core/index.js";

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
