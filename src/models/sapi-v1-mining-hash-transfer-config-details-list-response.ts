import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data15Schema, type Data15 } from "./data15.js";

export type SapiV1MiningHashTransferConfigDetailsListResponse = {
  code: number;
  msg: string;
  data: Data15;
};

export const sapiV1MiningHashTransferConfigDetailsListResponseSchema: Schema<SapiV1MiningHashTransferConfigDetailsListResponse> =
  s.object<SapiV1MiningHashTransferConfigDetailsListResponse>({
    code: s.int(),
    msg: s.string(),
    data: data15Schema,
  });
