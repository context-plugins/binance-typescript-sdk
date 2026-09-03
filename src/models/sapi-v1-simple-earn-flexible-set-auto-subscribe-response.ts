import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse = {
  success: boolean;
};

export const sapiV1SimpleEarnFlexibleSetAutoSubscribeResponseSchema: Schema<SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse> =
  s.object<SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse>({
    success: s.boolean(),
  });
