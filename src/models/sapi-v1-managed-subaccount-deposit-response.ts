import { s, type Schema } from "../core/index.js";

export type SapiV1ManagedSubaccountDepositResponse = {
  tranId: number;
};

export const sapiV1ManagedSubaccountDepositResponseSchema: Schema<SapiV1ManagedSubaccountDepositResponse> =
  s.object<SapiV1ManagedSubaccountDepositResponse>({
    tranId: s.number(),
  });
