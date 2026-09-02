import { s, type Schema } from "../core/index.js";
import { accountProfit1Schema, type AccountProfit1 } from "./account-profit1.js";

export type Data19 = {
  accountProfits: AccountProfit1[];
  totalNum: number;
  pageSize: number;
};

export const data19Schema: Schema<Data19> = s.object<Data19>({
  accountProfits: s.array(s.lazy(() => accountProfit1Schema)),
  totalNum: s.number(),
  pageSize: s.number(),
});
