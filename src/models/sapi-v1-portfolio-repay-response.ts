import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioRepayResponse = {
  tranId: number;
};

export const sapiV1PortfolioRepayResponseSchema: Schema<SapiV1PortfolioRepayResponse> =
  s.object<SapiV1PortfolioRepayResponse>({
    tranId: s.number(),
  });
