import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnLockedRedeemResponse = {
  redeemId: number;
  success: boolean;
};

export const sapiV1SimpleEarnLockedRedeemResponseSchema: Schema<SapiV1SimpleEarnLockedRedeemResponse> =
  s.object<SapiV1SimpleEarnLockedRedeemResponse>({
    redeemId: s.number(),
    success: s.boolean(),
  });
