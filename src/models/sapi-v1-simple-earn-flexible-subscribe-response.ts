import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnFlexibleSubscribeResponse = {
  purchaseId: number;
  success: boolean;
};

export const sapiV1SimpleEarnFlexibleSubscribeResponseSchema: Schema<SapiV1SimpleEarnFlexibleSubscribeResponse> =
  s.object<SapiV1SimpleEarnFlexibleSubscribeResponse>({
    purchaseId: s.number(),
    success: s.boolean(),
  });
