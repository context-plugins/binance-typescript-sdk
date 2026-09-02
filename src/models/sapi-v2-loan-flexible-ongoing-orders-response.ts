import { s, type Schema } from "../core/index.js";
import { row25Schema, type Row25 } from "./row25.js";

export type SapiV2LoanFlexibleOngoingOrdersResponse = {
  total: number;
  rows: Row25[];
};

export const sapiV2LoanFlexibleOngoingOrdersResponseSchema: Schema<SapiV2LoanFlexibleOngoingOrdersResponse> =
  s.object<SapiV2LoanFlexibleOngoingOrdersResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row25Schema)),
  });
