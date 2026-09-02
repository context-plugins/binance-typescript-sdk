import { s, type Schema } from "../core/index.js";

export type SapiV1MarginBorrowRepayResponse = {
  tranId: number;
};

export const sapiV1MarginBorrowRepayResponseSchema: Schema<SapiV1MarginBorrowRepayResponse> =
  s.object<SapiV1MarginBorrowRepayResponse>({
    tranId: s.number(),
  });
