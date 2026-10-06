import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginMaxTransferableResponse = {
  /** Account's currently max borrowable amount with sufficient system availability */
  amount: string;
  /** Max borrowable amount limited by the account level */
  borrowLimit: string;
};

export const sapiV1MarginMaxTransferableResponseSchema: Schema<SapiV1MarginMaxTransferableResponse> =
  s.object<SapiV1MarginMaxTransferableResponse>({
    amount: s.string(),
    borrowLimit: s.string(),
  });
