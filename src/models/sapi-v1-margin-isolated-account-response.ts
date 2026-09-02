import { s, type Schema } from "../core/index.js";

export type SapiV1MarginIsolatedAccountResponse = {
  success: boolean;
  symbol: string;
};

export const sapiV1MarginIsolatedAccountResponseSchema: Schema<SapiV1MarginIsolatedAccountResponse> =
  s.object<SapiV1MarginIsolatedAccountResponse>({
    success: s.boolean(),
    symbol: s.string(),
  });
