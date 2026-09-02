import { s, type Schema } from "../core/index.js";
import { row17Schema, type Row17 } from "./row17.js";

export type SapiV1LoanVipRequestDataResponse = {
  total: number;
  rows: Row17[];
};

export const sapiV1LoanVipRequestDataResponseSchema: Schema<SapiV1LoanVipRequestDataResponse> =
  s.object<SapiV1LoanVipRequestDataResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row17Schema)),
  });
