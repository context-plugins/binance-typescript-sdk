import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ManagedSubaccountWithdrawResponse = {
  tranId: number;
};

export const sapiV1ManagedSubaccountWithdrawResponseSchema: Schema<SapiV1ManagedSubaccountWithdrawResponse> =
  s.object<SapiV1ManagedSubaccountWithdrawResponse>({
    tranId: s.number(),
  });
