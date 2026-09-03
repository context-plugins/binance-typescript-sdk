import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LoanAdjustLtvResponse = {
  loanCoin: string;
  collateralCoin: string;
  direction: string;
  amount: string;
  currentLtv: string;
};

export const sapiV1LoanAdjustLtvResponseSchema: Schema<SapiV1LoanAdjustLtvResponse> =
  s.object<SapiV1LoanAdjustLtvResponse>({
    loanCoin: s.string(),
    collateralCoin: s.string(),
    direction: s.string(),
    amount: s.string(),
    currentLtv: s.string(),
    _keysMap: {
      currentLtv: "currentLTV",
    },
  });
