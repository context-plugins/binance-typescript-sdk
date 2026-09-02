import { s, type Schema } from "../core/index.js";
import { subAccountList1Schema, type SubAccountList1 } from "./sub-account-list1.js";

export type DeliveryAccountSummaryResp = {
  totalMarginBalanceOfBtc: string;
  totalUnrealizedProfitOfBtc: string;
  totalWalletBalanceOfBtc: string;
  asset: string;
  subAccountList: SubAccountList1[];
};

export const deliveryAccountSummaryRespSchema: Schema<DeliveryAccountSummaryResp> =
  s.object<DeliveryAccountSummaryResp>({
    totalMarginBalanceOfBtc: s.string(),
    totalUnrealizedProfitOfBtc: s.string(),
    totalWalletBalanceOfBtc: s.string(),
    asset: s.string(),
    subAccountList: s.array(s.lazy(() => subAccountList1Schema)),
    _keysMap: {
      totalMarginBalanceOfBtc: "totalMarginBalanceOfBTC",
      totalUnrealizedProfitOfBtc: "totalUnrealizedProfitOfBTC",
      totalWalletBalanceOfBtc: "totalWalletBalanceOfBTC",
    },
  });
