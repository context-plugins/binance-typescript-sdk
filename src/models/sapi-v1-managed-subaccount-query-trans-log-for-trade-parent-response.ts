import { s, type Schema } from "../core/index.js";
import {
  managerSubTransferHistoryVoSchema,
  type ManagerSubTransferHistoryVo,
} from "./manager-sub-transfer-history-vo.js";

export type SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse = {
  count: number;
  managerSubTransferHistoryVos: ManagerSubTransferHistoryVo[];
};

export const sapiV1ManagedSubaccountQueryTransLogForTradeParentResponseSchema: Schema<SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse> =
  s.object<SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse>({
    count: s.number(),
    managerSubTransferHistoryVos: s.array(s.lazy(() => managerSubTransferHistoryVoSchema)),
  });
