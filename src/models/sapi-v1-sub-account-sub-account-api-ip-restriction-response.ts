import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountSubAccountApiIpRestrictionResponse = {
  ipRestrict: string;
  ipList: string[];
  updateTime: number;
  apiKey: string;
};

export const sapiV1SubAccountSubAccountApiIpRestrictionResponseSchema: Schema<SapiV1SubAccountSubAccountApiIpRestrictionResponse> =
  s.object<SapiV1SubAccountSubAccountApiIpRestrictionResponse>({
    ipRestrict: s.string(),
    ipList: s.array(s.string()),
    updateTime: s.number(),
    apiKey: s.string(),
  });
