import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorError = {
  code: number;
  msg: string;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>({
  code: s.number(),
  msg: s.string(),
});
