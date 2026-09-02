import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse = {
  ipRestrict: string;
  ipList: string[];
  updateTime: number;
  apiKey: string;
};

export const sapiV1SubAccountSubAccountApiIpRestrictionIpListResponseSchema: Schema<SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse> =
  s.object<SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse>({
    ipRestrict: s.string(),
    ipList: s.array(s.string()),
    updateTime: s.number(),
    apiKey: s.string(),
  });
