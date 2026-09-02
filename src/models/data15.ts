import { s, type Schema } from "../core/index.js";
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
