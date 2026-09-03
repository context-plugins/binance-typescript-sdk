import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountMarginEnableResponse = {
  email: string;
  isMarginEnabled: boolean;
};

export const sapiV1SubAccountMarginEnableResponseSchema: Schema<SapiV1SubAccountMarginEnableResponse> =
  s.object<SapiV1SubAccountMarginEnableResponse>({
    email: s.string(),
    isMarginEnabled: s.boolean(),
  });
