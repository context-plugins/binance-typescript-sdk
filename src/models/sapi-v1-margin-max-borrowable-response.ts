import { s, type Schema } from "../core/index.js";

export type SapiV1MarginMaxBorrowableResponse = {
  amount: string;
  borrowLimit: string;
};

export const sapiV1MarginMaxBorrowableResponseSchema: Schema<SapiV1MarginMaxBorrowableResponse> =
  s.object<SapiV1MarginMaxBorrowableResponse>({
    amount: s.string(),
    borrowLimit: s.string(),
  });
