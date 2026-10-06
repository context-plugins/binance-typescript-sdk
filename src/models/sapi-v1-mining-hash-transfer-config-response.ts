import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MiningHashTransferConfigResponse = {
  code: number;
  msg: string;
  /** Mining Account */
  data: number;
};

export const sapiV1MiningHashTransferConfigResponseSchema: Schema<SapiV1MiningHashTransferConfigResponse> =
  s.object<SapiV1MiningHashTransferConfigResponse>({
    code: s.int(),
    msg: s.string(),
    data: s.int(),
  });
