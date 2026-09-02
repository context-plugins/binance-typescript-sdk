import { s, type Schema } from "../core/index.js";

export type Extend = {
  institutionName: string;
  cardNumber: string;
  digitalWalletId: string;
};

export const extendSchema: Schema<Extend> = s.object<Extend>({
  institutionName: s.string(),
  cardNumber: s.string(),
  digitalWalletId: s.string(),
});
