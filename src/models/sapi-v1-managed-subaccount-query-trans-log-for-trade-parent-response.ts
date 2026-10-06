import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
    count: s.int(),
    managerSubTransferHistoryVos: s.array(s.lazy(() => managerSubTransferHistoryVoSchema)),
  });
