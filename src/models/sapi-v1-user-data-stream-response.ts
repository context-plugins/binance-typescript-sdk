import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1UserDataStreamResponse = {
  listenKey: string;
};

export const sapiV1UserDataStreamResponseSchema: Schema<SapiV1UserDataStreamResponse> =
  s.object<SapiV1UserDataStreamResponse>({
    listenKey: s.string(),
  });
