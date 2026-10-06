import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  managerSubTransferHistoryVoSchema,
  type ManagerSubTransferHistoryVo,
} from "./manager-sub-transfer-history-vo.js";

export type SapiV1ManagedSubaccountQueryTransLogForInvestorResponse = {
  count: number;
  managerSubTransferHistoryVos: ManagerSubTransferHistoryVo[];
};

export const sapiV1ManagedSubaccountQueryTransLogForInvestorResponseSchema: Schema<SapiV1ManagedSubaccountQueryTransLogForInvestorResponse> =
  s.object<SapiV1ManagedSubaccountQueryTransLogForInvestorResponse>({
    count: s.int(),
    managerSubTransferHistoryVos: s.array(s.lazy(() => managerSubTransferHistoryVoSchema)),
  });
