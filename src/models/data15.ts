import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configDetailSchema, type ConfigDetail } from "./config-detail.js";

export type Data15 = {
  configDetails: ConfigDetail[];
  totalNum: number;
  pageSize: number;
};

export const data15Schema: Schema<Data15> = s.object<Data15>({
  configDetails: s.array(s.lazy(() => configDetailSchema)),
  totalNum: s.number(),
  pageSize: s.number(),
});
