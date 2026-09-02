import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountStatusResponse = {
  email: string;
  isSubUserEnabled: boolean;
  isUserActive: boolean;
  insertTime: number;
  isMarginEnabled: boolean;
  isFutureEnabled: boolean;
  mobile: number;
};

export const sapiV1SubAccountStatusResponseSchema: Schema<SapiV1SubAccountStatusResponse> =
  s.object<SapiV1SubAccountStatusResponse>({
    email: s.string(),
    isSubUserEnabled: s.boolean(),
    isUserActive: s.boolean(),
    insertTime: s.number(),
    isMarginEnabled: s.boolean(),
    isFutureEnabled: s.boolean(),
    mobile: s.number(),
  });
