import { s, type Schema } from "../core/index.js";

export type SapiV1SpotDelistScheduleResponse = {
  delistTime: number;
  symbol: string[];
};

export const sapiV1SpotDelistScheduleResponseSchema: Schema<SapiV1SpotDelistScheduleResponse> =
  s.object<SapiV1SpotDelistScheduleResponse>({
    delistTime: s.number(),
    symbol: s.array(s.string()),
  });
