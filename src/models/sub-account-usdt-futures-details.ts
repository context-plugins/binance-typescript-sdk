import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { futureAccountRespSchema, type FutureAccountResp } from "./future-account-resp.js";

export type SubAccountUsdtFuturesDetails = {
  futureAccountResp: FutureAccountResp;
};

export const subAccountUsdtFuturesDetailsSchema: Schema<SubAccountUsdtFuturesDetails> =
  s.object<SubAccountUsdtFuturesDetails>({
    futureAccountResp: futureAccountRespSchema,
  });
