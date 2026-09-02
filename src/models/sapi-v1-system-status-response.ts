import { s, type Schema } from "../core/index.js";

export type SapiV1SystemStatusResponse = {
  status: number;
  msg: string;
};

export const sapiV1SystemStatusResponseSchema: Schema<SapiV1SystemStatusResponse> =
  s.object<SapiV1SystemStatusResponse>({
    status: s.number(),
    msg: s.string(),
  });
