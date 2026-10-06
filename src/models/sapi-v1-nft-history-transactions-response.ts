import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { list3Schema, type List3 } from "./list3.js";

export type SapiV1NftHistoryTransactionsResponse = {
  total: number;
  list: List3[];
};

export const sapiV1NftHistoryTransactionsResponseSchema: Schema<SapiV1NftHistoryTransactionsResponse> =
  s.object<SapiV1NftHistoryTransactionsResponse>({
    total: s.int(),
    list: s.array(s.lazy(() => list3Schema)),
  });
