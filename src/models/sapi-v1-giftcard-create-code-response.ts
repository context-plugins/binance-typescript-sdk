import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data25Schema, type Data25 } from "./data25.js";

export type SapiV1GiftcardCreateCodeResponse = {
  code: string;
  message: string;
  data: Data25;
  success: boolean;
};

export const sapiV1GiftcardCreateCodeResponseSchema: Schema<SapiV1GiftcardCreateCodeResponse> =
  s.object<SapiV1GiftcardCreateCodeResponse>({
    code: s.string(),
    message: s.string(),
    data: data25Schema,
    success: s.boolean(),
  });
