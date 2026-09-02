import { s, type Schema } from "../core/index.js";

export type Assets2 = {
  asset: string;
  marginBalance: number;
  walletBalance: number;
};

export const assets2Schema: Schema<Assets2> = s.object<Assets2>({
  asset: s.string(),
  marginBalance: s.number(),
  walletBalance: s.number(),
});
