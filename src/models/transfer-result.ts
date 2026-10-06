import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferResult = {
  amount: string;
  fromAsset: string;
  operateTime: number;
  serviceChargeAmount: string;
  tranId: number;
  transferedAmount: string;
};

export const transferResultSchema: Schema<TransferResult> = s.object<TransferResult>({
  amount: s.string(),
  fromAsset: s.string(),
  operateTime: s.int(),
  serviceChargeAmount: s.string(),
  tranId: s.int(),
  transferedAmount: s.string(),
});
