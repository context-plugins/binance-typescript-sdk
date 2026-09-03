import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse = {
  leftPersonalQuota: string;
};

export const sapiV1SimpleEarnFlexiblePersonalLeftQuotaResponseSchema: Schema<SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse> =
  s.object<SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse>({
    leftPersonalQuota: s.string(),
  });
