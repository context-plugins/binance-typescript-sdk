import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SystemStatusResponse = {
  /** 0: normal, 1：system maintenance */
  status: number;
  /** "normal", "system_maintenance" */
  msg: string;
};

export const sapiV1SystemStatusResponseSchema: Schema<SapiV1SystemStatusResponse> =
  s.object<SapiV1SystemStatusResponse>({
    status: s.int(),
    msg: s.string(),
  });
