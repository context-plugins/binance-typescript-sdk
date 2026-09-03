import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginIsolatedAccountResponse = {
  success: boolean;
  symbol: string;
};

export const sapiV1MarginIsolatedAccountResponseSchema: Schema<SapiV1MarginIsolatedAccountResponse> =
  s.object<SapiV1MarginIsolatedAccountResponse>({
    success: s.boolean(),
    symbol: s.string(),
  });
