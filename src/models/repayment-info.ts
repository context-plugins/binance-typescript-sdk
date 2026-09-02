import { s, type Schema } from "../core/index.js";

export type RepaymentInfo = {
  loanCoin: string;
  remainingPrincipal: string;
  remainingInterest: string;
  collateralCoin: string;
  remainingCollateral: string;
  currentLtv: string;
  repayStatus: string;
};

export const repaymentInfoSchema: Schema<RepaymentInfo> = s.object<RepaymentInfo>({
  loanCoin: s.string(),
  remainingPrincipal: s.string(),
  remainingInterest: s.string(),
  collateralCoin: s.string(),
  remainingCollateral: s.string(),
  currentLtv: s.string(),
  repayStatus: s.string(),
  _keysMap: {
    currentLtv: "currentLTV",
  },
});
