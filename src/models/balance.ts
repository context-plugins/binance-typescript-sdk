import { s, type Schema } from "../core/index.js";

export type Balance = {
  asset: string;
  free: string;
  locked: string;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>({
  asset: s.string(),
  free: s.string(),
  locked: s.string(),
});
