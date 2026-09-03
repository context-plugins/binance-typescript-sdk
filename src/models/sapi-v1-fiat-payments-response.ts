import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data8Schema, type Data8 } from "./data8.js";

export type SapiV1FiatPaymentsResponse = {
  code: string;
  message: string;
  data: Data8[];
  total: number;
  success: boolean;
};

export const sapiV1FiatPaymentsResponseSchema: Schema<SapiV1FiatPaymentsResponse> =
  s.object<SapiV1FiatPaymentsResponse>({
    code: s.string(),
    message: s.string(),
    data: s.array(s.lazy(() => data8Schema)),
    total: s.number(),
    success: s.boolean(),
  });
