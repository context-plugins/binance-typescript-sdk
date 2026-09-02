import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountMarginEnableResponse = {
  email: string;
  isMarginEnabled: boolean;
};

export const sapiV1SubAccountMarginEnableResponseSchema: Schema<SapiV1SubAccountMarginEnableResponse> =
  s.object<SapiV1SubAccountMarginEnableResponse>({
    email: s.string(),
    isMarginEnabled: s.boolean(),
  });
