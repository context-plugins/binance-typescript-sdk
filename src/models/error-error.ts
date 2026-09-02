import { s, type Schema } from "../core/index.js";

export type ErrorError = {
  code: number;
  msg: string;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>({
  code: s.number(),
  msg: s.string(),
});
