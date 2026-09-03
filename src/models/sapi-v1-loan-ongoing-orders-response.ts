import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row19Schema, type Row19 } from "./row19.js";

export type SapiV1LoanOngoingOrdersResponse = {
  rows: Row19[];
  total: number;
};

export const sapiV1LoanOngoingOrdersResponseSchema: Schema<SapiV1LoanOngoingOrdersResponse> =
  s.object<SapiV1LoanOngoingOrdersResponse>({
    rows: s.array(s.lazy(() => row19Schema)),
    total: s.number(),
  });
