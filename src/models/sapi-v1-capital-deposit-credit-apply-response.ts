import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1CapitalDepositCreditApplyResponse = {
  code: string;
  message: string;
  data: boolean;
  success: boolean;
};

export const sapiV1CapitalDepositCreditApplyResponseSchema: Schema<SapiV1CapitalDepositCreditApplyResponse> =
  s.object<SapiV1CapitalDepositCreditApplyResponse>({
    code: s.string(),
    message: s.string(),
    data: s.boolean(),
    success: s.boolean(),
  });
