import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse = {
  leftPersonalQuota: string;
};

export const sapiV1SimpleEarnFlexiblePersonalLeftQuotaResponseSchema: Schema<SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse> =
  s.object<SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse>({
    leftPersonalQuota: s.string(),
  });
