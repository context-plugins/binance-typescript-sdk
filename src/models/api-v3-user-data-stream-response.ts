import { s, type Schema } from "../core/index.js";

export type ApiV3UserDataStreamResponse = {
  listenKey: string;
};

export const apiV3UserDataStreamResponseSchema: Schema<ApiV3UserDataStreamResponse> =
  s.object<ApiV3UserDataStreamResponse>({
    listenKey: s.string(),
  });
