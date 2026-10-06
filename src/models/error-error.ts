import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorError = {
  /** Error code */
  code: number;
  /** Error message */
  msg: string;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>({
  code: s.int(),
  msg: s.string(),
});
