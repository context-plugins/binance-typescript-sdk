import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data25Schema, type Data25 } from "./data25.js";

export type SapiV1GiftcardBuyCodeResponse = {
  code: string;
  message: string;
  data: Data25;
  success: boolean;
};

export const sapiV1GiftcardBuyCodeResponseSchema: Schema<SapiV1GiftcardBuyCodeResponse> =
  s.object<SapiV1GiftcardBuyCodeResponse>({
    code: s.string(),
    message: s.string(),
    data: data25Schema,
    success: s.boolean(),
  });
