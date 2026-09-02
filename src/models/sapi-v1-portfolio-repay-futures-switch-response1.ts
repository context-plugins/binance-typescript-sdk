import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioRepayFuturesSwitchResponse1 = {
  autoRepay: boolean;
};

export const sapiV1PortfolioRepayFuturesSwitchResponse1Schema: Schema<SapiV1PortfolioRepayFuturesSwitchResponse1> =
  s.object<SapiV1PortfolioRepayFuturesSwitchResponse1>({
    autoRepay: s.boolean(),
  });
