import { s, type Schema } from "../core/index.js";
import { list8Schema, type List8 } from "./list8.js";

export type SapiV1DciProductPositionsResponse = {
  total: number;
  list: List8[];
};

export const sapiV1DciProductPositionsResponseSchema: Schema<SapiV1DciProductPositionsResponse> =
  s.object<SapiV1DciProductPositionsResponse>({
    total: s.number(),
    list: s.array(s.lazy(() => list8Schema)),
  });
