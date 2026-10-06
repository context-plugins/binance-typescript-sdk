import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountProfitSchema, type AccountProfit } from "./account-profit.js";

export type Data13 = {
  accountProfits: AccountProfit[];
  /** Total Rows */
  totalNum: number;
  /** Rows per page */
  pageSize: number;
};

export const data13Schema: Schema<Data13> = s.object<Data13>({
  accountProfits: s.array(s.lazy(() => accountProfitSchema)),
  totalNum: s.int(),
  pageSize: s.int(),
});
