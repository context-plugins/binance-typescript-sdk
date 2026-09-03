import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioPmLoanResponse = {
  asset: string;
  amount: string;
};

export const sapiV1PortfolioPmLoanResponseSchema: Schema<SapiV1PortfolioPmLoanResponse> =
  s.object<SapiV1PortfolioPmLoanResponse>({
    asset: s.string(),
    amount: s.string(),
  });
