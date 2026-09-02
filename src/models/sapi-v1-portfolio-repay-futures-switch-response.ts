import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioRepayFuturesSwitchResponse = {
  msg: string;
};

export const sapiV1PortfolioRepayFuturesSwitchResponseSchema: Schema<SapiV1PortfolioRepayFuturesSwitchResponse> =
  s.object<SapiV1PortfolioRepayFuturesSwitchResponse>({
    msg: s.string(),
  });
