import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row3 = {
  isolatedSymbol: string;
  asset: string;
  interest: string;
  interestAccuredTime: number;
  interestRate: string;
  principal: string;
  type: string;
};

export const row3Schema: Schema<Row3> = s.object<Row3>({
  isolatedSymbol: s.string(),
  asset: s.string(),
  interest: s.string(),
  interestAccuredTime: s.int(),
  interestRate: s.string(),
  principal: s.string(),
  type: s.string(),
});
