import { s, type Schema } from "../core/index.js";

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
