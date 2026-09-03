import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginMaxBorrowableResponse = {
  amount: string;
  borrowLimit: string;
};

export const sapiV1MarginMaxBorrowableResponseSchema: Schema<SapiV1MarginMaxBorrowableResponse> =
  s.object<SapiV1MarginMaxBorrowableResponse>({
    amount: s.string(),
    borrowLimit: s.string(),
  });
