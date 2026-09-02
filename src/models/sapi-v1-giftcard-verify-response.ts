import { s, type Schema } from "../core/index.js";
import { data27Schema, type Data27 } from "./data27.js";

export type SapiV1GiftcardVerifyResponse = {
  code: string;
  message: string;
  data: Data27;
  success: boolean;
};

export const sapiV1GiftcardVerifyResponseSchema: Schema<SapiV1GiftcardVerifyResponse> =
  s.object<SapiV1GiftcardVerifyResponse>({
    code: s.string(),
    message: s.string(),
    data: data27Schema,
    success: s.boolean(),
  });
