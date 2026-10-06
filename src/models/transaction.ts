import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transaction = {
  /** transaction id */
  tranId: number;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  tranId: s.int(),
});
