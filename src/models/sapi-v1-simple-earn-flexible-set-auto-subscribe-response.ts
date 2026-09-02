import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse = {
  success: boolean;
};

export const sapiV1SimpleEarnFlexibleSetAutoSubscribeResponseSchema: Schema<SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse> =
  s.object<SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse>({
    success: s.boolean(),
  });
