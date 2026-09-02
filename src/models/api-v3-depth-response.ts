import { s, type Schema } from "../core/index.js";

export type ApiV3DepthResponse = {
  lastUpdateId: number;
  bids: string[][];
  asks: string[][];
};

export const apiV3DepthResponseSchema: Schema<ApiV3DepthResponse> = s.object<ApiV3DepthResponse>({
  lastUpdateId: s.number(),
  bids: s.array(s.array(s.string())),
  asks: s.array(s.array(s.string())),
});
