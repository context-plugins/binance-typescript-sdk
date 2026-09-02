import { s, type Schema } from "../core/index.js";

export type SapiV1MiningHashTransferConfigResponse = {
  code: number;
  msg: string;
  data: number;
};

export const sapiV1MiningHashTransferConfigResponseSchema: Schema<SapiV1MiningHashTransferConfigResponse> =
  s.object<SapiV1MiningHashTransferConfigResponse>({
    code: s.number(),
    msg: s.string(),
    data: s.number(),
  });
