import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { list5Schema, type List5 } from "./list5.js";

export type SapiV1NftHistoryWithdrawResponse = {
  total: number;
  list: List5[];
};

export const sapiV1NftHistoryWithdrawResponseSchema: Schema<SapiV1NftHistoryWithdrawResponse> =
  s.object<SapiV1NftHistoryWithdrawResponse>({
    total: s.number(),
    list: s.array(s.lazy(() => list5Schema)),
  });
