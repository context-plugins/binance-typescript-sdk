import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";

export type SapiV1MarginIsolatedMarginDataResponse = {
  vipLevel?: number;
  symbol?: string;
  leverage?: string;
  data?: Data3[];
};

export const sapiV1MarginIsolatedMarginDataResponseSchema: Schema<SapiV1MarginIsolatedMarginDataResponse> =
  s.object<SapiV1MarginIsolatedMarginDataResponse>({
    vipLevel: s.optional(s.number()),
    symbol: s.optional(s.string()),
    leverage: s.optional(s.string()),
    data: s.optional(s.array(s.lazy(() => data3Schema))),
  });
