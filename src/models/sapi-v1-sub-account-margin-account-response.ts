import { s, type Schema } from "../core/index.js";
import { marginTradeCoeffVoSchema, type MarginTradeCoeffVo } from "./margin-trade-coeff-vo.js";
import { marginUserAssetVoListSchema, type MarginUserAssetVoList } from "./margin-user-asset-vo-list.js";

export type SapiV1SubAccountMarginAccountResponse = {
  email: string;
  marginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  marginTradeCoeffVo: MarginTradeCoeffVo;
  marginUserAssetVoList: MarginUserAssetVoList[];
};

export const sapiV1SubAccountMarginAccountResponseSchema: Schema<SapiV1SubAccountMarginAccountResponse> =
  s.object<SapiV1SubAccountMarginAccountResponse>({
    email: s.string(),
    marginLevel: s.string(),
    totalAssetOfBtc: s.string(),
    totalLiabilityOfBtc: s.string(),
    totalNetAssetOfBtc: s.string(),
    marginTradeCoeffVo: marginTradeCoeffVoSchema,
    marginUserAssetVoList: s.array(s.lazy(() => marginUserAssetVoListSchema)),
  });
