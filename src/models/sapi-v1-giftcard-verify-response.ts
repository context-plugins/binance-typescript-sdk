import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
