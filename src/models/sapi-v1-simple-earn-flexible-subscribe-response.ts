import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnFlexibleSubscribeResponse = {
  purchaseId: number;
  success: boolean;
};

export const sapiV1SimpleEarnFlexibleSubscribeResponseSchema: Schema<SapiV1SimpleEarnFlexibleSubscribeResponse> =
  s.object<SapiV1SimpleEarnFlexibleSubscribeResponse>({
    purchaseId: s.number(),
    success: s.boolean(),
  });
