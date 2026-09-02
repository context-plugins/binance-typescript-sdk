import { s, type Schema } from "../core/index.js";

export type SapiV1MarginIsolatedAccountLimitResponse = {
  enabledAccount: number;
  maxAccount: number;
};

export const sapiV1MarginIsolatedAccountLimitResponseSchema: Schema<SapiV1MarginIsolatedAccountLimitResponse> =
  s.object<SapiV1MarginIsolatedAccountLimitResponse>({
    enabledAccount: s.number(),
    maxAccount: s.number(),
  });
