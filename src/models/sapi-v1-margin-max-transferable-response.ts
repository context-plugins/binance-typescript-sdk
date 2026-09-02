import { s, type Schema } from "../core/index.js";

export type SapiV1MarginMaxTransferableResponse = {
  amount: string;
  borrowLimit: string;
};

export const sapiV1MarginMaxTransferableResponseSchema: Schema<SapiV1MarginMaxTransferableResponse> =
  s.object<SapiV1MarginMaxTransferableResponse>({
    amount: s.string(),
    borrowLimit: s.string(),
  });
