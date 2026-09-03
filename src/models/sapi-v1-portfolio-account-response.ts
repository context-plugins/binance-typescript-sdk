import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1PortfolioAccountResponse = {
  uniMmr: string;
  accountEquity: string;
  actualEquity: string;
  accountMaintMargin: string;
  accountStatus: string;
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
