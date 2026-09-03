import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data27 = {
  valid: boolean;
  token: string;
  amount: string;
};

export const data27Schema: Schema<Data27> = s.object<Data27>({
  valid: s.boolean(),
  token: s.string(),
  amount: s.string(),
});
