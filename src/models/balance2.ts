import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Balance2 = {
  asset: string;
  free: number;
  locked: number;
};

export const balance2Schema: Schema<Balance2> = s.object<Balance2>({
  asset: s.string(),
  free: s.int(),
  locked: s.int(),
});
