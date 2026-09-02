import { s, type Schema } from "../core/index.js";

export type SapiV1MarginDelistScheduleResponse = {
  delistTime?: number;
  crossMarginAssets?: string[];
  isolatedMarginSymbols?: string[];
};

export const sapiV1MarginDelistScheduleResponseSchema: Schema<SapiV1MarginDelistScheduleResponse> =
  s.object<SapiV1MarginDelistScheduleResponse>({
    delistTime: s.optional(s.number()),
    crossMarginAssets: s.optional(s.array(s.string())),
    isolatedMarginSymbols: s.optional(s.array(s.string())),
  });
