import { s, type Schema } from "../core/index.js";

export type SapiV1UserDataStreamIsolatedResponse = {
  listenKey: string;
};

export const sapiV1UserDataStreamIsolatedResponseSchema: Schema<SapiV1UserDataStreamIsolatedResponse> =
  s.object<SapiV1UserDataStreamIsolatedResponse>({
    listenKey: s.string(),
  });
