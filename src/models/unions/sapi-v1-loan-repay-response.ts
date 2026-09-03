import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { repaymentInfoSchema, type RepaymentInfo } from "../repayment-info.js";
import { repaymentInfo2Schema, type RepaymentInfo2 } from "../repayment-info2.js";

export type SapiV1LoanRepayResponse = RepaymentInfo | RepaymentInfo2;

export const sapiV1LoanRepayResponseSchema: Schema<SapiV1LoanRepayResponse> = s.of<SapiV1LoanRepayResponse>(
  s.union([s.lazy(() => repaymentInfoSchema), s.lazy(() => repaymentInfo2Schema)]),
);
