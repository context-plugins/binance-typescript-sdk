import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data26Schema, type Data26 } from "./data26.js";

export type SapiV1GiftcardRedeemCodeResponse = {
  code: string;
  message: string;
  data: Data26;
  success: boolean;
};

export const sapiV1GiftcardRedeemCodeResponseSchema: Schema<SapiV1GiftcardRedeemCodeResponse> =
  s.object<SapiV1GiftcardRedeemCodeResponse>({
    code: s.string(),
    message: s.string(),
    data: data26Schema,
    success: s.boolean(),
  });
