import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioInterestHistoryResponse = {
  asset: string;
  interest: string;
  interestAccruedTime: number;
  interestRate: string;
  principal: string;
};

export const sapiV1PortfolioInterestHistoryResponseSchema: Schema<SapiV1PortfolioInterestHistoryResponse> =
  s.object<SapiV1PortfolioInterestHistoryResponse>({
    asset: s.string(),
    interest: s.string(),
    interestAccruedTime: s.number(),
    interestRate: s.string(),
    principal: s.string(),
  });
