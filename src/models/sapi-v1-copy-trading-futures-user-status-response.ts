import { s, type Schema } from "../core/index.js";
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
