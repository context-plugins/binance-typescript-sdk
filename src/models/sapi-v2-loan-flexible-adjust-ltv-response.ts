import { s, type Schema } from "../core/index.js";

export type SapiV2LoanFlexibleAdjustLtvResponse = {
  loanCoin: string;
  collateralCoin: string;
  direction: string;
  adjustmentAmount: string;
  currentLtv: string;
};

export const sapiV2LoanFlexibleAdjustLtvResponseSchema: Schema<SapiV2LoanFlexibleAdjustLtvResponse> =
  s.object<SapiV2LoanFlexibleAdjustLtvResponse>({
    loanCoin: s.string(),
    collateralCoin: s.string(),
    direction: s.string(),
    adjustmentAmount: s.string(),
    currentLtv: s.string(),
    _keysMap: {
      currentLtv: "currentLTV",
    },
  });
