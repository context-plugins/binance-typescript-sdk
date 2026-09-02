import { s, type Schema } from "../core/index.js";

export type List = {
  time: number;
  hashrate: string;
  reject: string;
};

export const listSchema: Schema<List> = s.object<List>({
  time: s.number(),
  hashrate: s.string(),
  reject: s.string(),
});
