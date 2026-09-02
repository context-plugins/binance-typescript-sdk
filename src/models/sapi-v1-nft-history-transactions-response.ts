import { s, type Schema } from "../core/index.js";
import { list3Schema, type List3 } from "./list3.js";

export type SapiV1NftHistoryTransactionsResponse = {
  total: number;
  list: List3[];
};

export const sapiV1NftHistoryTransactionsResponseSchema: Schema<SapiV1NftHistoryTransactionsResponse> =
  s.object<SapiV1NftHistoryTransactionsResponse>({
    total: s.number(),
    list: s.array(s.lazy(() => list3Schema)),
  });
