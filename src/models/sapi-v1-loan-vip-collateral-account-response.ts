import { s, type Schema } from "../core/index.js";
import { row14Schema, type Row14 } from "./row14.js";

export type SapiV1LoanVipCollateralAccountResponse = {
  rows: Row14[];
  total: number;
};

export const sapiV1LoanVipCollateralAccountResponseSchema: Schema<SapiV1LoanVipCollateralAccountResponse> =
  s.object<SapiV1LoanVipCollateralAccountResponse>({
    rows: s.array(s.lazy(() => row14Schema)),
    total: s.number(),
  });
