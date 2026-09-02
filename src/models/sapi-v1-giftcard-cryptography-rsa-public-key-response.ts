import { s, type Schema } from "../core/index.js";

export type SapiV1GiftcardCryptographyRsaPublicKeyResponse = {
  code: string;
  message: string;
  data: string;
  success: boolean;
};

export const sapiV1GiftcardCryptographyRsaPublicKeyResponseSchema: Schema<SapiV1GiftcardCryptographyRsaPublicKeyResponse> =
  s.object<SapiV1GiftcardCryptographyRsaPublicKeyResponse>({
    code: s.string(),
    message: s.string(),
    data: s.string(),
    success: s.boolean(),
  });
