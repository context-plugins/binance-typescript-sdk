import { s, type Schema } from "../core/index.js";

export type SapiV1MiningHashTransferConfigCancelResponse = {
  code: number;
  msg: string;
  data: boolean;
};

export const sapiV1MiningHashTransferConfigCancelResponseSchema: Schema<SapiV1MiningHashTransferConfigCancelResponse> =
  s.object<SapiV1MiningHashTransferConfigCancelResponse>({
    code: s.number(),
    msg: s.string(),
    data: s.boolean(),
  });
