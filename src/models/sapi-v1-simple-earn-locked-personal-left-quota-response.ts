import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnLockedPersonalLeftQuotaResponse = {
  leftPersonalQuota: string;
};

export const sapiV1SimpleEarnLockedPersonalLeftQuotaResponseSchema: Schema<SapiV1SimpleEarnLockedPersonalLeftQuotaResponse> =
  s.object<SapiV1SimpleEarnLockedPersonalLeftQuotaResponse>({
    leftPersonalQuota: s.string(),
  });
