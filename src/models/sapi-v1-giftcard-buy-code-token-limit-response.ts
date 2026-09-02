import { s, type Schema } from "../core/index.js";
import { data29Schema, type Data29 } from "./data29.js";

export type SapiV1GiftcardBuyCodeTokenLimitResponse = {
  code: string;
  message: string;
  data: Data29;
  success: boolean;
};

export const sapiV1GiftcardBuyCodeTokenLimitResponseSchema: Schema<SapiV1GiftcardBuyCodeTokenLimitResponse> =
  s.object<SapiV1GiftcardBuyCodeTokenLimitResponse>({
    code: s.string(),
    message: s.string(),
    data: data29Schema,
    success: s.boolean(),
  });
