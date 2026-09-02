import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnLockedPersonalLeftQuotaResponse = {
  leftPersonalQuota: string;
};

export const sapiV1SimpleEarnLockedPersonalLeftQuotaResponseSchema: Schema<SapiV1SimpleEarnLockedPersonalLeftQuotaResponse> =
  s.object<SapiV1SimpleEarnLockedPersonalLeftQuotaResponse>({
    leftPersonalQuota: s.string(),
  });
