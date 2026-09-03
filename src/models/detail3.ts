import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detail3 = {
  targetAsset: string;
  averagePriceInUsd: string;
  totalInvestedInUsd: string;
  purchasedAmount: string;
  purchasedAmountUnit: string;
  pnlInUsd: string;
  roi: string;
  percentage: string;
  assetStatus: string;
  availableAmount: string;
  availableAmountUnit: string;
  redeemedAmout: string;
  redeemedAmoutUnit: string;
  assetValueInUsd: string;
};

export const detail3Schema: Schema<Detail3> = s.object<Detail3>({
  targetAsset: s.string(),
  averagePriceInUsd: s.string(),
  totalInvestedInUsd: s.string(),
  purchasedAmount: s.string(),
  purchasedAmountUnit: s.string(),
  pnlInUsd: s.string(),
  roi: s.string(),
  percentage: s.string(),
  assetStatus: s.string(),
  availableAmount: s.string(),
  availableAmountUnit: s.string(),
  redeemedAmout: s.string(),
  redeemedAmoutUnit: s.string(),
  assetValueInUsd: s.string(),
  _keysMap: {
    averagePriceInUsd: "averagePriceInUSD",
    totalInvestedInUsd: "totalInvestedInUSD",
    pnlInUsd: "pnlInUSD",
    assetValueInUsd: "assetValueInUSD",
  },
});
