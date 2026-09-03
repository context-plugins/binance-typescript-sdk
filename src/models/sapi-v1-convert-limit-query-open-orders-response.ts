import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { list1Schema, type List1 } from "./list1.js";

export type SapiV1ConvertLimitQueryOpenOrdersResponse = {
  list: List1[];
};

export const sapiV1ConvertLimitQueryOpenOrdersResponseSchema: Schema<SapiV1ConvertLimitQueryOpenOrdersResponse> =
  s.object<SapiV1ConvertLimitQueryOpenOrdersResponse>({
    list: s.array(s.lazy(() => list1Schema)),
  });
