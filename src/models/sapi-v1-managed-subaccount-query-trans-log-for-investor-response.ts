import { s, type Schema } from "../core/index.js";
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
    count: s.number(),
    managerSubTransferHistoryVos: s.array(s.lazy(() => managerSubTransferHistoryVoSchema)),
  });
