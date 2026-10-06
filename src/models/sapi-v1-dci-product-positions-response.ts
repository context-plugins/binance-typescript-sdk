import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { list8Schema, type List8 } from "./list8.js";

export type SapiV1DciProductPositionsResponse = {
  total: number;
  list: List8[];
};

export const sapiV1DciProductPositionsResponseSchema: Schema<SapiV1DciProductPositionsResponse> =
  s.object<SapiV1DciProductPositionsResponse>({
    total: s.int(),
    list: s.array(s.lazy(() => list8Schema)),
  });
