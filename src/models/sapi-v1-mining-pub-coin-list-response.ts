import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data10Schema, type Data10 } from "./data10.js";

export type SapiV1MiningPubCoinListResponse = {
  code: number;
  msg: string;
  data: Data10[];
};

export const sapiV1MiningPubCoinListResponseSchema: Schema<SapiV1MiningPubCoinListResponse> =
  s.object<SapiV1MiningPubCoinListResponse>({
    code: s.number(),
    msg: s.string(),
    data: s.array(s.lazy(() => data10Schema)),
  });
