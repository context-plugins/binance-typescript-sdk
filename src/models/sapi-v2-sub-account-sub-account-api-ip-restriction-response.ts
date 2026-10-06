import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV2SubAccountSubAccountApiIpRestrictionResponse = {
  status: string;
  ipList: string[];
  updateTime: number;
  apiKey: string;
};

export const sapiV2SubAccountSubAccountApiIpRestrictionResponseSchema: Schema<SapiV2SubAccountSubAccountApiIpRestrictionResponse> =
  s.object<SapiV2SubAccountSubAccountApiIpRestrictionResponse>({
    status: s.string(),
    ipList: s.array(s.string()),
    updateTime: s.int(),
    apiKey: s.string(),
  });
