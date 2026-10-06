import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type List = {
  time: number;
  hashrate: string;
  reject: string;
};

export const listSchema: Schema<List> = s.object<List>({
  time: s.int(),
  hashrate: s.string(),
  reject: s.string(),
});
