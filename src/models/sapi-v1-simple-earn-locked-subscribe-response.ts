import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnLockedSubscribeResponse = {
  purchaseId: number;
  positionId: string;
  success: boolean;
};

export const sapiV1SimpleEarnLockedSubscribeResponseSchema: Schema<SapiV1SimpleEarnLockedSubscribeResponse> =
  s.object<SapiV1SimpleEarnLockedSubscribeResponse>({
    purchaseId: s.number(),
    positionId: s.string(),
    success: s.boolean(),
  });
