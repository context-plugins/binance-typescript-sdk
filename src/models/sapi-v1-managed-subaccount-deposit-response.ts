import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ManagedSubaccountDepositResponse = {
  tranId: number;
};

export const sapiV1ManagedSubaccountDepositResponseSchema: Schema<SapiV1ManagedSubaccountDepositResponse> =
  s.object<SapiV1ManagedSubaccountDepositResponse>({
    tranId: s.number(),
  });
