import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  /** Error code */
  code: number;
  /** Error message */
  msg: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  code: s.int(),
  msg: s.string(),
});
