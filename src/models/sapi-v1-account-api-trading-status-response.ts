import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type SapiV1AccountApiTradingStatusResponse = {
  data: Data4;
};

export const sapiV1AccountApiTradingStatusResponseSchema: Schema<SapiV1AccountApiTradingStatusResponse> =
  s.object<SapiV1AccountApiTradingStatusResponse>({
    data: data4Schema,
  });
