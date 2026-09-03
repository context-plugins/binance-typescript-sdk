import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioRepayFuturesSwitchResponse = {
  msg: string;
};

export const sapiV1PortfolioRepayFuturesSwitchResponseSchema: Schema<SapiV1PortfolioRepayFuturesSwitchResponse> =
  s.object<SapiV1PortfolioRepayFuturesSwitchResponse>({
    msg: s.string(),
  });
