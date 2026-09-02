import { s, type Schema } from "../core/index.js";

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
  operateTime: s.number(),
  serviceChargeAmount: s.string(),
  tranId: s.number(),
  transferedAmount: s.string(),
});
