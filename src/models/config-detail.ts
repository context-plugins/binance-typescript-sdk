import { s, type Schema } from "../core/index.js";

export type ConfigDetail = {
  configId: number;
  poolUsername: string;
  toPoolUsername: string;
  algoName: string;
  hashRate: number;
  startDay: number;
  endDay: number;
  status: number;
};

export const configDetailSchema: Schema<ConfigDetail> = s.object<ConfigDetail>({
  configId: s.number(),
  poolUsername: s.string(),
  toPoolUsername: s.string(),
  algoName: s.string(),
  hashRate: s.number(),
  startDay: s.number(),
  endDay: s.number(),
  status: s.number(),
});
