import { s, type Schema } from "../core/index.js";
import { subAccountList2Schema, type SubAccountList2 } from "./sub-account-list2.js";

export type SapiV1SubAccountMarginAccountSummaryResponse = {
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  subAccountList: SubAccountList2[];
};

export const sapiV1SubAccountMarginAccountSummaryResponseSchema: Schema<SapiV1SubAccountMarginAccountSummaryResponse> =
  s.object<SapiV1SubAccountMarginAccountSummaryResponse>({
    totalAssetOfBtc: s.string(),
    totalLiabilityOfBtc: s.string(),
    totalNetAssetOfBtc: s.string(),
    subAccountList: s.array(s.lazy(() => subAccountList2Schema)),
  });
