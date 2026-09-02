import { s, type Schema } from "../core/index.js";

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
  interestAccuredTime: s.number(),
  interestRate: s.string(),
  principal: s.string(),
  type: s.string(),
});
