import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioRepayFuturesNegativeBalanceResponse = {
  msg: string;
};

export const sapiV1PortfolioRepayFuturesNegativeBalanceResponseSchema: Schema<SapiV1PortfolioRepayFuturesNegativeBalanceResponse> =
  s.object<SapiV1PortfolioRepayFuturesNegativeBalanceResponse>({
    msg: s.string(),
  });
