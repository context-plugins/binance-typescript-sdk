import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data30Schema, type Data30 } from "./data30.js";

export type SapiV1CopyTradingFuturesUserStatusResponse = {
  code: string;
  message: string;
  data: Data30;
  success: boolean;
};

export const sapiV1CopyTradingFuturesUserStatusResponseSchema: Schema<SapiV1CopyTradingFuturesUserStatusResponse> =
  s.object<SapiV1CopyTradingFuturesUserStatusResponse>({
    code: s.string(),
    message: s.string(),
    data: data30Schema,
    success: s.boolean(),
  });
