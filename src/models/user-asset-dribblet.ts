import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAssetDribbletDetailSchema, type UserAssetDribbletDetail } from "./user-asset-dribblet-detail.js";

export type UserAssetDribblet = {
  operateTime: number;
  /** Total transfered BNB amount for this exchange. */
  totalTransferedAmount: string;
  /** Total service charge amount for this exchange. */
  totalServiceChargeAmount: string;
  transId: number;
  userAssetDribbletDetails: UserAssetDribbletDetail[];
};

export const userAssetDribbletSchema: Schema<UserAssetDribblet> = s.object<UserAssetDribblet>({
  operateTime: s.int(),
  totalTransferedAmount: s.string(),
  totalServiceChargeAmount: s.string(),
  transId: s.int(),
  userAssetDribbletDetails: s.array(s.lazy(() => userAssetDribbletDetailSchema)),
});
