import { s, type Schema } from "../core/index.js";

export type Data29 = {
  coin?: string;
  fromMin?: string;
  fromMax?: string;
};

export const data29Schema: Schema<Data29> = s.object<Data29>({
  coin: s.optional(s.string()),
  fromMin: s.optional(s.string()),
  fromMax: s.optional(s.string()),
});
