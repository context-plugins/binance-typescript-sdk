import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Assets = {
  matic: string;
  stpt: string;
  tvk: string;
  shib: string;
};

export const assetsSchema: Schema<Assets> = s.object<Assets>({
  matic: s.string(),
  stpt: s.string(),
  tvk: s.string(),
  shib: s.string(),
  _keysMap: {
    matic: "MATIC",
    stpt: "STPT",
    tvk: "TVK",
    shib: "SHIB",
  },
});
