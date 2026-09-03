import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SystemStatusResponse = {
  status: number;
  msg: string;
};

export const sapiV1SystemStatusResponseSchema: Schema<SapiV1SystemStatusResponse> =
  s.object<SapiV1SystemStatusResponse>({
    status: s.number(),
    msg: s.string(),
  });
