import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1UserDataStreamIsolatedResponse = {
  listenKey: string;
};

export const sapiV1UserDataStreamIsolatedResponseSchema: Schema<SapiV1UserDataStreamIsolatedResponse> =
  s.object<SapiV1UserDataStreamIsolatedResponse>({
    listenKey: s.string(),
  });
