import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestOneOffResponse = {
  transactionId: number;
  waitSecond: number;
};

export const sapiV1LendingAutoInvestOneOffResponseSchema: Schema<SapiV1LendingAutoInvestOneOffResponse> =
  s.object<SapiV1LendingAutoInvestOneOffResponse>({
    transactionId: s.number(),
    waitSecond: s.number(),
  });
