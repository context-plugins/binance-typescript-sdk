import { s, type Schema } from "../core/index.js";
import { row11Schema, type Row11 } from "./row11.js";

export type SapiV1FuturesTransferResponse1 = {
  rows: Row11[];
  total: number;
};

export const sapiV1FuturesTransferResponse1Schema: Schema<SapiV1FuturesTransferResponse1> =
  s.object<SapiV1FuturesTransferResponse1>({
    rows: s.array(s.lazy(() => row11Schema)),
    total: s.number(),
  });
