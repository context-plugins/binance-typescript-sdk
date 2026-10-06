import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detail4 = {
  targetAsset: string;
  /** average price of the asset in USD */
  averagePriceInUsd: string;
  /** total source asset invested for this target asset in equivilent of USD */
  totalInvestedInUsd: string;
  /** current invest */
  currentInvestedInUsd: string;
  /** purchased amount of target asset */
  purchasedAmount: string;
  /** PNL denominated in USD */
  pnlInUsd: string;
  /** ROI calculated in decimal */
  roi: string;
  /** asset allocation in the plan. If it's single plan, then it's 100 */
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
