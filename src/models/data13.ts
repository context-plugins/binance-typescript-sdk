import { s, type Schema } from "../core/index.js";
import { accountProfitSchema, type AccountProfit } from "./account-profit.js";

export type Data13 = {
  accountProfits: AccountProfit[];
  totalNum: number;
  pageSize: number;
};

export const data13Schema: Schema<Data13> = s.object<Data13>({
  accountProfits: s.array(s.lazy(() => accountProfitSchema)),
  totalNum: s.number(),
  pageSize: s.number(),
});
