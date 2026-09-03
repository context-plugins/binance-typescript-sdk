import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV3TimeResponse = {
  serverTime: number;
};

export const apiV3TimeResponseSchema: Schema<ApiV3TimeResponse> = s.object<ApiV3TimeResponse>({
  serverTime: s.number(),
});
