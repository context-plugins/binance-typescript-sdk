import { s, type Schema } from "../core/index.js";

export type Error = {
  code: number;
  msg: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  code: s.number(),
  msg: s.string(),
});
