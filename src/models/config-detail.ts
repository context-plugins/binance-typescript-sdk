import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
