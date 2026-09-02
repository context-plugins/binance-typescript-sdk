import { s, type Schema } from "../core/index.js";

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
    updateTime: s.number(),
    apiKey: s.string(),
  });
