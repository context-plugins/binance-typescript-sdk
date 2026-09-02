import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountVirtualSubAccountResponse = {
  email: string;
};

export const sapiV1SubAccountVirtualSubAccountResponseSchema: Schema<SapiV1SubAccountVirtualSubAccountResponse> =
  s.object<SapiV1SubAccountVirtualSubAccountResponse>({
    email: s.string(),
  });
