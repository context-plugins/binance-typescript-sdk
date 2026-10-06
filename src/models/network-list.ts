import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetworkList = {
  addressRegex: string;
  coin: string;
  /** shown only when "depositEnable" is false. */
  depositDesc: string;
  depositEnable: boolean;
  isDefault: boolean;
  memoRegex: string;
  /** min number for balance confirmation. */
  minConfirm: number;
  name: string;
  network: string;
  specialTips: string;
  /** confirmation number for balance unlock. */
  unLockConfirm: number;
  /** shown only when "withdrawEnable" is false */
  withdrawDesc: string;
  withdrawEnable: boolean;
  withdrawFee: string;
  withdrawIntegerMultiple: string;
  withdrawMax: string;
  withdrawMin: string;
  sameAddress: boolean;
};

export const networkListSchema: Schema<NetworkList> = s.object<NetworkList>({
  addressRegex: s.string(),
  coin: s.string(),
  depositDesc: s.string(),
  depositEnable: s.boolean(),
  isDefault: s.boolean(),
  memoRegex: s.string(),
  minConfirm: s.int(),
  name: s.string(),
  network: s.string(),
  specialTips: s.string(),
  unLockConfirm: s.int(),
  withdrawDesc: s.string(),
  withdrawEnable: s.boolean(),
  withdrawFee: s.string(),
  withdrawIntegerMultiple: s.string(),
  withdrawMax: s.string(),
  withdrawMin: s.string(),
  sameAddress: s.boolean(),
});
