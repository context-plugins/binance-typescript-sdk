import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { otherProfitSchema, type OtherProfit } from "./other-profit.js";

export type Data14 = {
  otherProfits: OtherProfit[];
  totalNum: number;
  pageSize: number;
};

export const data14Schema: Schema<Data14> = s.object<Data14>({
  otherProfits: s.array(s.lazy(() => otherProfitSchema)),
  totalNum: s.number(),
  pageSize: s.number(),
});
