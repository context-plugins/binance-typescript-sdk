import { s, type Schema } from "../core/index.js";

export type SapiV1UserDataStreamResponse = {
  listenKey: string;
};

export const sapiV1UserDataStreamResponseSchema: Schema<SapiV1UserDataStreamResponse> =
  s.object<SapiV1UserDataStreamResponse>({
    listenKey: s.string(),
  });
