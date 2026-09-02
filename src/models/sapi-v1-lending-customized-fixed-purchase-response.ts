import { s, type Schema } from "../core/index.js";

export type SapiV1LendingCustomizedFixedPurchaseResponse = {
  purchaseId: string;
};

export const sapiV1LendingCustomizedFixedPurchaseResponseSchema: Schema<SapiV1LendingCustomizedFixedPurchaseResponse> =
  s.object<SapiV1LendingCustomizedFixedPurchaseResponse>({
    purchaseId: s.string(),
  });
