import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConfigDetail = {
  /** Mining ID */
  configId: number;
  /** Transfer out of subaccount */
  poolUsername: string;
  /** Transfer into subaccount */
  toPoolUsername: string;
  /** Transfer algorithm */
  algoName: string;
  /** Transferred Hashrate quantity */
  hashRate: number;
  /** Start date */
  startDay: number;
  /** End date */
  endDay: number;
  /** 0 Processing, 1：Cancelled, 2：Terminated */
  status: number;
};

export const configDetailSchema: Schema<ConfigDetail> = s.object<ConfigDetail>({
  configId: s.int(),
  poolUsername: s.string(),
  toPoolUsername: s.string(),
  algoName: s.string(),
  hashRate: s.int(),
  startDay: s.int(),
  endDay: s.int(),
  status: s.int(),
});
