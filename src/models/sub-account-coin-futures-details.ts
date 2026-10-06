import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { asset2Schema, type Asset2 } from "./asset2.js";

export type SubAccountCoinFuturesDetails = {
  email: string;
  assets: Asset2[];
  canDeposit: boolean;
  canTrade: boolean;
  canWithdraw: boolean;
  feeTier: number;
  updateTime: number;
};

export const subAccountCoinFuturesDetailsSchema: Schema<SubAccountCoinFuturesDetails> =
  s.object<SubAccountCoinFuturesDetails>({
    email: s.string(),
    assets: s.array(s.lazy(() => asset2Schema)),
    canDeposit: s.boolean(),
    canTrade: s.boolean(),
    canWithdraw: s.boolean(),
    feeTier: s.int(),
    updateTime: s.int(),
  });
