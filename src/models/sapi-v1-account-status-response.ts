import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AccountStatusResponse = {
  data: string;
};

export const sapiV1AccountStatusResponseSchema: Schema<SapiV1AccountStatusResponse> =
  s.object<SapiV1AccountStatusResponse>({
    data: s.string(),
  });
