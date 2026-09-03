import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountVirtualSubAccountResponse = {
  email: string;
};

export const sapiV1SubAccountVirtualSubAccountResponseSchema: Schema<SapiV1SubAccountVirtualSubAccountResponse> =
  s.object<SapiV1SubAccountVirtualSubAccountResponse>({
    email: s.string(),
  });
