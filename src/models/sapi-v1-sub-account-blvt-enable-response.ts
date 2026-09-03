import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountBlvtEnableResponse = {
  email: string;
  enableBlvt: boolean;
};

export const sapiV1SubAccountBlvtEnableResponseSchema: Schema<SapiV1SubAccountBlvtEnableResponse> =
  s.object<SapiV1SubAccountBlvtEnableResponse>({
    email: s.string(),
    enableBlvt: s.boolean(),
  });
