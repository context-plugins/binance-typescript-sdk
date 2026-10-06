import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginDelistScheduleResponse = {
  delistTime?: number;
  crossMarginAssets?: string[];
  isolatedMarginSymbols?: string[];
};

export const sapiV1MarginDelistScheduleResponseSchema: Schema<SapiV1MarginDelistScheduleResponse> =
  s.object<SapiV1MarginDelistScheduleResponse>({
    delistTime: s.optional(s.int()),
    crossMarginAssets: s.optional(s.array(s.string())),
    isolatedMarginSymbols: s.optional(s.array(s.string())),
  });
