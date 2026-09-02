import { s, type Schema } from "../core/index.js";
import { row1Schema, type Row1 } from "./row1.js";

export type SapiV1MarginBorrowRepayResponse1 = {
  rows: Row1[];
  total: number;
};

export const sapiV1MarginBorrowRepayResponse1Schema: Schema<SapiV1MarginBorrowRepayResponse1> =
  s.object<SapiV1MarginBorrowRepayResponse1>({
    rows: s.array(s.lazy(() => row1Schema)),
    total: s.number(),
  });
