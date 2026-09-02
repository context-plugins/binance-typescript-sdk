import { s, type Schema } from "../core/index.js";
import {
  managerSubUserInfoVoListSchema,
  type ManagerSubUserInfoVoList,
} from "./manager-sub-user-info-vo-list.js";

export type SapiV1ManagedSubaccountInfoResponse = {
  total: number;
  managerSubUserInfoVoList: ManagerSubUserInfoVoList[];
};

export const sapiV1ManagedSubaccountInfoResponseSchema: Schema<SapiV1ManagedSubaccountInfoResponse> =
  s.object<SapiV1ManagedSubaccountInfoResponse>({
    total: s.number(),
    managerSubUserInfoVoList: s.array(s.lazy(() => managerSubUserInfoVoListSchema)),
  });
