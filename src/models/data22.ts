import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundsDetailSchema, type FundsDetail } from "./funds-detail.js";
import { payerInfoSchema, type PayerInfo } from "./payer-info.js";
import { receiverInfoSchema, type ReceiverInfo } from "./receiver-info.js";

export type Data22 = {
  orderType: string;
  transactionId: string;
  transactionTime: number;
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
  transactionTime: s.number(),
  amount: s.string(),
  currency: s.string(),
  walletType: s.number(),
  walletTypes: s.array(s.number()),
  fundsDetail: s.array(s.lazy(() => fundsDetailSchema)),
  payerInfo: payerInfoSchema,
  receiverInfo: receiverInfoSchema,
});
