import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestOneOffStatusResponse = {
  transactionId: number;
  status: string;
};

export const sapiV1LendingAutoInvestOneOffStatusResponseSchema: Schema<SapiV1LendingAutoInvestOneOffStatusResponse> =
  s.object<SapiV1LendingAutoInvestOneOffStatusResponse>({
    transactionId: s.number(),
    status: s.string(),
  });
