import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnLockedSetRedeemOptionResponse = {
  success: boolean;
};

export const sapiV1SimpleEarnLockedSetRedeemOptionResponseSchema: Schema<SapiV1SimpleEarnLockedSetRedeemOptionResponse> =
  s.object<SapiV1SimpleEarnLockedSetRedeemOptionResponse>({
    success: s.boolean(),
  });
