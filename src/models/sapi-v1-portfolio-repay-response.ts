import { s, type Schema } from "../core/index.js";

export type SapiV1PortfolioRepayResponse = {
  tranId: number;
};

export const sapiV1PortfolioRepayResponseSchema: Schema<SapiV1PortfolioRepayResponse> =
  s.object<SapiV1PortfolioRepayResponse>({
    tranId: s.number(),
  });
