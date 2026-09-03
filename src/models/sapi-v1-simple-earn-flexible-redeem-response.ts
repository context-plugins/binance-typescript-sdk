import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnFlexibleRedeemResponse = {
  redeemId: number;
  success: boolean;
};

export const sapiV1SimpleEarnFlexibleRedeemResponseSchema: Schema<SapiV1SimpleEarnFlexibleRedeemResponse> =
  s.object<SapiV1SimpleEarnFlexibleRedeemResponse>({
    redeemId: s.number(),
    success: s.boolean(),
  });
