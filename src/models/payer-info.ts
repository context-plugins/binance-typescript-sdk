import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
