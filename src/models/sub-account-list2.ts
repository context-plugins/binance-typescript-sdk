import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
