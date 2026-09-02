import { s, type Schema } from "../core/index.js";

export type Transaction = {
  tranId: number;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  tranId: s.number(),
});
