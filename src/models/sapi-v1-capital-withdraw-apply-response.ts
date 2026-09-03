import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1CapitalWithdrawApplyResponse = {
  id: string;
};

export const sapiV1CapitalWithdrawApplyResponseSchema: Schema<SapiV1CapitalWithdrawApplyResponse> =
  s.object<SapiV1CapitalWithdrawApplyResponse>({
    id: s.string(),
  });
