import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { list2Schema, type List2 } from "./list2.js";

export type SapiV1ConvertTradeFlowResponse = {
  list: List2[];
  startTime: number;
  endTime: number;
  limit: number;
  moreData: boolean;
};

export const sapiV1ConvertTradeFlowResponseSchema: Schema<SapiV1ConvertTradeFlowResponse> =
  s.object<SapiV1ConvertTradeFlowResponse>({
    list: s.array(s.lazy(() => list2Schema)),
    startTime: s.number(),
    endTime: s.number(),
    limit: s.number(),
    moreData: s.boolean(),
  });
