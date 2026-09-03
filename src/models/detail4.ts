import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detail4 = {
  targetAsset: string;
  averagePriceInUsd: string;
  totalInvestedInUsd: string;
  currentInvestedInUsd: string;
  purchasedAmount: string;
  pnlInUsd: string;
  roi: string;
  percentage: string;
  availableAmount: string;
  redeemedAmount: string;
  assetValueInUsd: string;
};

export const detail4Schema: Schema<Detail4> = s.object<Detail4>({
  targetAsset: s.string(),
  averagePriceInUsd: s.string(),
  totalInvestedInUsd: s.string(),
  currentInvestedInUsd: s.string(),
  purchasedAmount: s.string(),
  pnlInUsd: s.string(),
  roi: s.string(),
  percentage: s.string(),
  availableAmount: s.string(),
  redeemedAmount: s.string(),
  assetValueInUsd: s.string(),
  _keysMap: {
    averagePriceInUsd: "averagePriceInUSD",
    totalInvestedInUsd: "totalInvestedInUSD",
    currentInvestedInUsd: "currentInvestedInUSD",
    pnlInUsd: "pnlInUSD",
    assetValueInUsd: "assetValueInUSD",
  },
});
