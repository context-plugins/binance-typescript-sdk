import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LendingCustomizedFixedPurchaseResponse = {
  purchaseId: string;
};

export const sapiV1LendingCustomizedFixedPurchaseResponseSchema: Schema<SapiV1LendingCustomizedFixedPurchaseResponse> =
  s.object<SapiV1LendingCustomizedFixedPurchaseResponse>({
    purchaseId: s.string(),
  });
