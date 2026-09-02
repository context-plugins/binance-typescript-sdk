import { s, type Schema } from "../core/index.js";

export type SapiV1ManagedSubaccountWithdrawResponse = {
  tranId: number;
};

export const sapiV1ManagedSubaccountWithdrawResponseSchema: Schema<SapiV1ManagedSubaccountWithdrawResponse> =
  s.object<SapiV1ManagedSubaccountWithdrawResponse>({
    tranId: s.number(),
  });
