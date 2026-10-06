import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioAccountResponse = {
  /** Classic Portfolio margin account maintenance margin rate */
  uniMmr: string;
  /** Account equity, unit is USD */
  accountEquity: string;
  /** Actual equity, unit is USD */
  actualEquity: string;
  /** Classic Portfolio margin account maintenance margin, unit is USD */
  accountMaintMargin: string;
  /**
   * Classic Portfolio margin account status:"NORMAL", "MARGIN_CALL", "SUPPLY_MARGIN",
   * "REDUCE_ONLY", "ACTIVE_LIQUIDATION", "FORCE_LIQUIDATION", "BANKRUPTED"
   */
  accountStatus: string;
  /** PM_1 for classic PM, PM_2 for PM */
  accountType: string;
};

export const sapiV1PortfolioAccountResponseSchema: Schema<SapiV1PortfolioAccountResponse> =
  s.object<SapiV1PortfolioAccountResponse>({
    uniMmr: s.string(),
    accountEquity: s.string(),
    actualEquity: s.string(),
    accountMaintMargin: s.string(),
    accountStatus: s.string(),
    accountType: s.string(),
    _keysMap: {
      uniMmr: "uniMMR",
    },
  });
