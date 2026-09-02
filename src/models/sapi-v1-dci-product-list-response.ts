import { s, type Schema } from "../core/index.js";
import { list7Schema, type List7 } from "./list7.js";

export type SapiV1DciProductListResponse = {
  total: number;
  list: List7[];
};

export const sapiV1DciProductListResponseSchema: Schema<SapiV1DciProductListResponse> =
  s.object<SapiV1DciProductListResponse>({
    total: s.number(),
    list: s.array(s.lazy(() => list7Schema)),
  });
