import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundsDetailSchema, type FundsDetail } from "./funds-detail.js";
import { payerInfoSchema, type PayerInfo } from "./payer-info.js";
import { receiverInfoSchema, type ReceiverInfo } from "./receiver-info.js";

export type Data22 = {
  /**
   * Enum：PAY(C2B Merchant Acquiring Payment), PAY_REFUND(C2B Merchant Acquiring Payment,refund),
   * C2C(C2C Transfer Payment),CRYPTO_BOX(Crypto box), CRYPTO_BOX_RF(Crypto Box, refund),
   * C2C_HOLDING(Transfer to new Binance user), C2C_HOLDING_RF(Transfer to new Binance user,refund),
   * PAYOUT(B2C Disbursement Payment)
   */
  orderType: string;
  transactionId: string;
  transactionTime: number;
  /** order amount(up to 8 decimal places), positive is income, negative is expenditure */
  amount: string;
  currency: string;
  walletType: number;
  walletTypes: number[];
  fundsDetail: FundsDetail[];
  payerInfo: PayerInfo;
  receiverInfo: ReceiverInfo;
};

export const data22Schema: Schema<Data22> = s.object<Data22>({
  orderType: s.string(),
  transactionId: s.string(),
  transactionTime: s.int(),
  amount: s.string(),
  currency: s.string(),
  walletType: s.int(),
  walletTypes: s.array(s.int()),
  fundsDetail: s.array(s.lazy(() => fundsDetailSchema)),
  payerInfo: payerInfoSchema,
  receiverInfo: receiverInfoSchema,
});
