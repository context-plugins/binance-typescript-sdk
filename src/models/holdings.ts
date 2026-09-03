import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Holdings = {
  wbethAmount: string;
  bethAmount: string;
};

export const holdingsSchema: Schema<Holdings> = s.object<Holdings>({
  wbethAmount: s.string(),
  bethAmount: s.string(),
});
