import { s, type Schema } from "../core/index.js";

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
