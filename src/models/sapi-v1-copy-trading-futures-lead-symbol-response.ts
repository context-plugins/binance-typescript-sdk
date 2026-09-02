import { s, type Schema } from "../core/index.js";
import { data31Schema, type Data31 } from "./data31.js";

export type SapiV1CopyTradingFuturesLeadSymbolResponse = {
  code: string;
  message: string;
  data: Data31;
};

export const sapiV1CopyTradingFuturesLeadSymbolResponseSchema: Schema<SapiV1CopyTradingFuturesLeadSymbolResponse> =
  s.object<SapiV1CopyTradingFuturesLeadSymbolResponse>({
    code: s.string(),
    message: s.string(),
    data: data31Schema,
  });
