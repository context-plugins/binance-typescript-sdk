import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountEoptionsEnableResponse = {
  email: string;
  isEOptionsEnabled: boolean;
};

export const sapiV1SubAccountEoptionsEnableResponseSchema: Schema<SapiV1SubAccountEoptionsEnableResponse> =
  s.object<SapiV1SubAccountEoptionsEnableResponse>({
    email: s.string(),
    isEOptionsEnabled: s.boolean(),
  });
