import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginMaxTransferableResponse = {
  amount: string;
  borrowLimit: string;
};

export const sapiV1MarginMaxTransferableResponseSchema: Schema<SapiV1MarginMaxTransferableResponse> =
  s.object<SapiV1MarginMaxTransferableResponse>({
    amount: s.string(),
    borrowLimit: s.string(),
  });
