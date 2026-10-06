import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnLockedRedeemResponse = {
  redeemId: number;
  success: boolean;
};

export const sapiV1SimpleEarnLockedRedeemResponseSchema: Schema<SapiV1SimpleEarnLockedRedeemResponse> =
  s.object<SapiV1SimpleEarnLockedRedeemResponse>({
    redeemId: s.int(),
    success: s.boolean(),
  });
