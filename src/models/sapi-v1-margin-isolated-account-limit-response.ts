import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginIsolatedAccountLimitResponse = {
  enabledAccount: number;
  maxAccount: number;
};

export const sapiV1MarginIsolatedAccountLimitResponseSchema: Schema<SapiV1MarginIsolatedAccountLimitResponse> =
  s.object<SapiV1MarginIsolatedAccountLimitResponse>({
    enabledAccount: s.int(),
    maxAccount: s.int(),
  });
