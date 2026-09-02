import { s, type Schema } from "../core/index.js";

export type SubAccountList2 = {
  email: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
};

export const subAccountList2Schema: Schema<SubAccountList2> = s.object<SubAccountList2>({
  email: s.string(),
  totalAssetOfBtc: s.string(),
  totalLiabilityOfBtc: s.string(),
  totalNetAssetOfBtc: s.string(),
});
