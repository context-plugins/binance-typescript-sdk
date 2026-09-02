import { s, type Schema } from "../core/index.js";

export type SapiV1MarginMaxLeverageResponse = {
  success: boolean;
};

export const sapiV1MarginMaxLeverageResponseSchema: Schema<SapiV1MarginMaxLeverageResponse> =
  s.object<SapiV1MarginMaxLeverageResponse>({
    success: s.boolean(),
  });
