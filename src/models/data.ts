import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceSchema, type Balance } from "./balance.js";

export type Data = {
  balances: Balance[];
  totalAssetOfBtc: string;
};

export const dataSchema: Schema<Data> = s.object<Data>({
  balances: s.array(s.lazy(() => balanceSchema)),
  totalAssetOfBtc: s.string(),
});
