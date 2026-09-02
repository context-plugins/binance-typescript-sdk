import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioRepayFuturesNegativeBalanceResponse = {
  msg: string;
};

export const sapiV1PortfolioRepayFuturesNegativeBalanceResponseSchema: Schema<SapiV1PortfolioRepayFuturesNegativeBalanceResponse> =
  s.object<SapiV1PortfolioRepayFuturesNegativeBalanceResponse>({
    msg: s.string(),
  });
