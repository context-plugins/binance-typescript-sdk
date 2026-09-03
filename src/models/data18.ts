import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listSchema, type List } from "./list.js";

export type Data18 = {
  type: string;
  userName: string;
  list: List[];
};

export const data18Schema: Schema<Data18> = s.object<Data18>({
  type: s.string(),
  userName: s.string(),
  list: s.array(s.lazy(() => listSchema)),
});
