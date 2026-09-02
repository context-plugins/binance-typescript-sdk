import { s, type Schema } from "../core/index.js";
import { futureAccountRespSchema, type FutureAccountResp } from "./future-account-resp.js";

export type SubAccountUsdtFuturesDetails = {
  futureAccountResp: FutureAccountResp;
};

export const subAccountUsdtFuturesDetailsSchema: Schema<SubAccountUsdtFuturesDetails> =
  s.object<SubAccountUsdtFuturesDetails>({
    futureAccountResp: futureAccountRespSchema,
  });
