import { s, type Schema } from "../core/index.js";

export type ApiV3TimeResponse = {
  serverTime: number;
};

export const apiV3TimeResponseSchema: Schema<ApiV3TimeResponse> = s.object<ApiV3TimeResponse>({
  serverTime: s.number(),
});
