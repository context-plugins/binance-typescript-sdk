import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV3DepthResponse = {
  lastUpdateId: number;
  bids: string[][];
  asks: string[][];
};

export const apiV3DepthResponseSchema: Schema<ApiV3DepthResponse> = s.object<ApiV3DepthResponse>({
  lastUpdateId: s.int(),
  bids: s.array(s.array(s.string())),
  asks: s.array(s.array(s.string())),
});
