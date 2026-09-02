import { s, type Schema } from "../core/index.js";

export type Data3 = {
  coin?: string;
  dailyInterest?: string;
  borrowLimit?: string;
};

export const data3Schema: Schema<Data3> = s.object<Data3>({
  coin: s.optional(s.string()),
  dailyInterest: s.optional(s.string()),
  borrowLimit: s.optional(s.string()),
});
