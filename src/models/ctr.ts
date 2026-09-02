import { s, type Schema } from "../core/index.js";

export type Ctr = {
  minWithdrawAmount: string;
  depositStatus: boolean;
  withdrawFee: number;
  withdrawStatus: boolean;
  depositTip: string;
};

export const ctrSchema: Schema<Ctr> = s.object<Ctr>({
  minWithdrawAmount: s.string(),
  depositStatus: s.boolean(),
  withdrawFee: s.number(),
  withdrawStatus: s.boolean(),
  depositTip: s.string(),
});
