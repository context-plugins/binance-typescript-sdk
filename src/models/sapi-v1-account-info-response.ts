import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AccountInfoResponse = {
  vipLevel: number;
  /** true or false for margin. */
  isMarginEnabled: boolean;
  /** true or false for futures. */
  isFutureEnabled: boolean;
};

export const sapiV1AccountInfoResponseSchema: Schema<SapiV1AccountInfoResponse> =
  s.object<SapiV1AccountInfoResponse>({
    vipLevel: s.int(),
    isMarginEnabled: s.boolean(),
    isFutureEnabled: s.boolean(),
  });
