import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AccountInfoResponse = {
  vipLevel: number;
  isMarginEnabled: boolean;
  isFutureEnabled: boolean;
};

export const sapiV1AccountInfoResponseSchema: Schema<SapiV1AccountInfoResponse> =
  s.object<SapiV1AccountInfoResponse>({
    vipLevel: s.number(),
    isMarginEnabled: s.boolean(),
    isFutureEnabled: s.boolean(),
  });
