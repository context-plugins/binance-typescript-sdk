import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnLockedSetAutoSubscribeResponse = {
  success: boolean;
};

export const sapiV1SimpleEarnLockedSetAutoSubscribeResponseSchema: Schema<SapiV1SimpleEarnLockedSetAutoSubscribeResponse> =
  s.object<SapiV1SimpleEarnLockedSetAutoSubscribeResponse>({
    success: s.boolean(),
  });
