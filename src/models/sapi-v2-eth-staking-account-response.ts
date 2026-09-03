import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingsSchema, type Holdings } from "./holdings.js";
import { profitSchema, type Profit } from "./profit.js";

export type SapiV2EthStakingAccountResponse = {
  holdingInEth: string;
  holdings: Holdings;
  thirtyDaysProfitInEth: string;
  profit: Profit;
};

export const sapiV2EthStakingAccountResponseSchema: Schema<SapiV2EthStakingAccountResponse> =
  s.object<SapiV2EthStakingAccountResponse>({
    holdingInEth: s.string(),
    holdings: holdingsSchema,
    thirtyDaysProfitInEth: s.string(),
    profit: profitSchema,
    _keysMap: {
      holdingInEth: "holdingInETH",
      thirtyDaysProfitInEth: "thirtyDaysProfitInETH",
    },
  });
