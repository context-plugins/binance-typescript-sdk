import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnLockedSetRedeemOptionResponse = {
  success: boolean;
};

export const sapiV1SimpleEarnLockedSetRedeemOptionResponseSchema: Schema<SapiV1SimpleEarnLockedSetRedeemOptionResponse> =
  s.object<SapiV1SimpleEarnLockedSetRedeemOptionResponse>({
    success: s.boolean(),
  });
