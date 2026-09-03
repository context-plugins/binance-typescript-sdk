import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAssetDribbletDetail = {
  transId: number;
  serviceChargeAmount: string;
  amount: string;
  operateTime: number;
  transferedAmount: string;
  fromAsset: string;
};

export const userAssetDribbletDetailSchema: Schema<UserAssetDribbletDetail> =
  s.object<UserAssetDribbletDetail>({
    transId: s.number(),
    serviceChargeAmount: s.string(),
    amount: s.string(),
    operateTime: s.number(),
    transferedAmount: s.string(),
    fromAsset: s.string(),
  });
