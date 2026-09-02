import { s, type Schema } from "../core/index.js";

export type FundsDetail = {
  currency: string;
  amount: string;
};

export const fundsDetailSchema: Schema<FundsDetail> = s.object<FundsDetail>({
  currency: s.string(),
  amount: s.string(),
});
