import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  code: number;
  msg: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  code: s.number(),
  msg: s.string(),
});
