import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginBorrowRepayResponse = {
  tranId: number;
};

export const sapiV1MarginBorrowRepayResponseSchema: Schema<SapiV1MarginBorrowRepayResponse> =
  s.object<SapiV1MarginBorrowRepayResponse>({
    tranId: s.int(),
  });
