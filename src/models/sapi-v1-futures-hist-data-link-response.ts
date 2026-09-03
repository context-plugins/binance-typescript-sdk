import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data20Schema, type Data20 } from "./data20.js";

export type SapiV1FuturesHistDataLinkResponse = {
  data: Data20[];
};

export const sapiV1FuturesHistDataLinkResponseSchema: Schema<SapiV1FuturesHistDataLinkResponse> =
  s.object<SapiV1FuturesHistDataLinkResponse>({
    data: s.array(s.lazy(() => data20Schema)),
  });
