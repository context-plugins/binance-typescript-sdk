import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountFuturesEnableResponse = {
  email: string;
  isFuturesEnabled: boolean;
};

export const sapiV1SubAccountFuturesEnableResponseSchema: Schema<SapiV1SubAccountFuturesEnableResponse> =
  s.object<SapiV1SubAccountFuturesEnableResponse>({
    email: s.string(),
    isFuturesEnabled: s.boolean(),
  });
