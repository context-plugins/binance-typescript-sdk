import { s, type Schema } from "../core/index.js";

export type Balance2 = {
  asset: string;
  free: number;
  locked: number;
};

export const balance2Schema: Schema<Balance2> = s.object<Balance2>({
  asset: s.string(),
  free: s.number(),
  locked: s.number(),
});
