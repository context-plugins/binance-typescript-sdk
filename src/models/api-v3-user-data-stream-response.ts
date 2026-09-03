import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV3UserDataStreamResponse = {
  listenKey: string;
};

export const apiV3UserDataStreamResponseSchema: Schema<ApiV3UserDataStreamResponse> =
  s.object<ApiV3UserDataStreamResponse>({
    listenKey: s.string(),
  });
