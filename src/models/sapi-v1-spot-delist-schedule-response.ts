import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SpotDelistScheduleResponse = {
  delistTime: number;
  symbol: string[];
};

export const sapiV1SpotDelistScheduleResponseSchema: Schema<SapiV1SpotDelistScheduleResponse> =
  s.object<SapiV1SpotDelistScheduleResponse>({
    delistTime: s.int(),
    symbol: s.array(s.string()),
  });
