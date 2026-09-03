import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HashrateData = {
  time: number;
  hashrate: string;
  reject: number;
};

export const hashrateDataSchema: Schema<HashrateData> = s.object<HashrateData>({
  time: s.number(),
  hashrate: s.string(),
  reject: s.number(),
});
