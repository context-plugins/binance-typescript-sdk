import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  managerSubTransferHistoryVo2Schema,
  type ManagerSubTransferHistoryVo2,
} from "./manager-sub-transfer-history-vo2.js";

export type SapiV1ManagedSubaccountQueryTransLogResponse = {
  count: number;
  managerSubTransferHistoryVos: ManagerSubTransferHistoryVo2[];
};

export const sapiV1ManagedSubaccountQueryTransLogResponseSchema: Schema<SapiV1ManagedSubaccountQueryTransLogResponse> =
  s.object<SapiV1ManagedSubaccountQueryTransLogResponse>({
    count: s.int(),
    managerSubTransferHistoryVos: s.array(s.lazy(() => managerSubTransferHistoryVo2Schema)),
  });
