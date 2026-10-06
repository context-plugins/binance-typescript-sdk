import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginMaxBorrowableResponse = {
  /** account's currently max borrowable amount with sufficient system availability */
  amount: string;
  /** max borrowable amount limited by the account level */
  borrowLimit: string;
};

export const sapiV1MarginMaxBorrowableResponseSchema: Schema<SapiV1MarginMaxBorrowableResponse> =
  s.object<SapiV1MarginMaxBorrowableResponse>({
    amount: s.string(),
    borrowLimit: s.string(),
  });
