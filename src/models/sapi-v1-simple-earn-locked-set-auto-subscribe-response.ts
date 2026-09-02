import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnLockedSetAutoSubscribeResponse = {
  success: boolean;
};

export const sapiV1SimpleEarnLockedSetAutoSubscribeResponseSchema: Schema<SapiV1SimpleEarnLockedSetAutoSubscribeResponse> =
  s.object<SapiV1SimpleEarnLockedSetAutoSubscribeResponse>({
    success: s.boolean(),
  });
