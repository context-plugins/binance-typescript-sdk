import { s, type Schema } from "../core/index.js";
import { row4Schema, type Row4 } from "./row4.js";

export type SapiV1MarginForceLiquidationRecResponse = {
  rows: Row4[];
  total: number;
};

export const sapiV1MarginForceLiquidationRecResponseSchema: Schema<SapiV1MarginForceLiquidationRecResponse> =
  s.object<SapiV1MarginForceLiquidationRecResponse>({
    rows: s.array(s.lazy(() => row4Schema)),
    total: s.number(),
  });
