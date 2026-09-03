import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginMaxLeverageResponse = {
  success: boolean;
};

export const sapiV1MarginMaxLeverageResponseSchema: Schema<SapiV1MarginMaxLeverageResponse> =
  s.object<SapiV1MarginMaxLeverageResponse>({
    success: s.boolean(),
  });
