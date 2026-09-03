import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundsDetail = {
  currency: string;
  amount: string;
};

export const fundsDetailSchema: Schema<FundsDetail> = s.object<FundsDetail>({
  currency: s.string(),
  amount: s.string(),
});
