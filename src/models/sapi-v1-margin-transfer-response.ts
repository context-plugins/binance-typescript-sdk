import { s, type Schema } from "../core/index.js";
import { row2Schema, type Row2 } from "./row2.js";

export type SapiV1MarginTransferResponse = {
  rows: Row2[];
  total: number;
};

export const sapiV1MarginTransferResponseSchema: Schema<SapiV1MarginTransferResponse> =
  s.object<SapiV1MarginTransferResponse>({
    rows: s.array(s.lazy(() => row2Schema)),
    total: s.number(),
  });
