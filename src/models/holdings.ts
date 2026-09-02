import { s, type Schema } from "../core/index.js";

export type Holdings = {
  wbethAmount: string;
  bethAmount: string;
};

export const holdingsSchema: Schema<Holdings> = s.object<Holdings>({
  wbethAmount: s.string(),
  bethAmount: s.string(),
});
