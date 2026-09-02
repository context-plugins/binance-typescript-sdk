import { s, type Schema } from "../core/index.js";
import { row12Schema, type Row12 } from "./row12.js";

export type SapiV1LoanVipOngoingOrdersResponse = {
  rows: Row12[];
  total: number;
};

export const sapiV1LoanVipOngoingOrdersResponseSchema: Schema<SapiV1LoanVipOngoingOrdersResponse> =
  s.object<SapiV1LoanVipOngoingOrdersResponse>({
    rows: s.array(s.lazy(() => row12Schema)),
    total: s.number(),
  });
