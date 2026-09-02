import { s, type Schema } from "../core/index.js";

export type SapiV1CapitalWithdrawApplyResponse = {
  id: string;
};

export const sapiV1CapitalWithdrawApplyResponseSchema: Schema<SapiV1CapitalWithdrawApplyResponse> =
  s.object<SapiV1CapitalWithdrawApplyResponse>({
    id: s.string(),
  });
