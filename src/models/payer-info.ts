import { s, type Schema } from "../core/index.js";

export type PayerInfo = {
  name: string;
  type: string;
  binanceId: string;
  accountId: string;
};

export const payerInfoSchema: Schema<PayerInfo> = s.object<PayerInfo>({
  name: s.string(),
  type: s.string(),
  binanceId: s.string(),
  accountId: s.string(),
});
