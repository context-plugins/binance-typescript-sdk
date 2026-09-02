import { s, type Schema } from "../core/index.js";
import { data4Schema, type Data4 } from "./data4.js";

export type SapiV1AccountApiTradingStatusResponse = {
  data: Data4;
};

export const sapiV1AccountApiTradingStatusResponseSchema: Schema<SapiV1AccountApiTradingStatusResponse> =
  s.object<SapiV1AccountApiTradingStatusResponse>({
    data: data4Schema,
  });
