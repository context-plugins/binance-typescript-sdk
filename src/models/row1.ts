import { s, type Schema } from "../core/index.js";

export type Row1 = {
  isolatedSymbol?: string;
  amount?: string;
  asset: string;
  interest?: string;
  principal: string;
  status: string;
  timestamp: number;
  txId: number;
};

export const row1Schema: Schema<Row1> = s.object<Row1>({
  isolatedSymbol: s.optional(s.string()),
  amount: s.optional(s.string()),
  asset: s.string(),
  interest: s.optional(s.string()),
  principal: s.string(),
  status: s.string(),
  timestamp: s.number(),
  txId: s.number(),
});
