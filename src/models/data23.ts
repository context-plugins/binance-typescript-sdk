import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data24Schema, type Data24 } from "./data24.js";

export type Data23 = {
  page: number;
  totalRecords: number;
  totalPageNum: number;
  data: Data24[];
};

export const data23Schema: Schema<Data23> = s.object<Data23>({
  page: s.int(),
  totalRecords: s.int(),
  totalPageNum: s.int(),
  data: s.array(s.lazy(() => data24Schema)),
});
