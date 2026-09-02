import { s, type Schema } from "../core/index.js";
import { list4Schema, type List4 } from "./list4.js";

export type SapiV1NftHistoryDepositResponse = {
  total: number;
  list: List4[];
};

export const sapiV1NftHistoryDepositResponseSchema: Schema<SapiV1NftHistoryDepositResponse> =
  s.object<SapiV1NftHistoryDepositResponse>({
    total: s.number(),
    list: s.array(s.lazy(() => list4Schema)),
  });
