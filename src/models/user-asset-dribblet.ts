import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAssetDribbletDetailSchema, type UserAssetDribbletDetail } from "./user-asset-dribblet-detail.js";

export type UserAssetDribblet = {
  operateTime: number;
  totalTransferedAmount: string;
  totalServiceChargeAmount: string;
  transId: number;
  userAssetDribbletDetails: UserAssetDribbletDetail[];
};

export const userAssetDribbletSchema: Schema<UserAssetDribblet> = s.object<UserAssetDribblet>({
  operateTime: s.number(),
  totalTransferedAmount: s.string(),
  totalServiceChargeAmount: s.string(),
  transId: s.number(),
  userAssetDribbletDetails: s.array(s.lazy(() => userAssetDribbletDetailSchema)),
});
