import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioRepayFuturesSwitchResponse1 = {
  autoRepay: boolean;
};

export const sapiV1PortfolioRepayFuturesSwitchResponse1Schema: Schema<SapiV1PortfolioRepayFuturesSwitchResponse1> =
  s.object<SapiV1PortfolioRepayFuturesSwitchResponse1>({
    autoRepay: s.boolean(),
  });
