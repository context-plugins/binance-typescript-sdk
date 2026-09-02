import { s, type Schema } from "../core/index.js";

export type SapiV1AccountStatusResponse = {
  data: string;
};

export const sapiV1AccountStatusResponseSchema: Schema<SapiV1AccountStatusResponse> =
  s.object<SapiV1AccountStatusResponse>({
    data: s.string(),
  });
