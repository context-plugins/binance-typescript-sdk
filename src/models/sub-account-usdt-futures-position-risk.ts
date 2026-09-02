import { s, type Schema } from "../core/index.js";
import { futurePositionRiskVoSchema, type FuturePositionRiskVo } from "./future-position-risk-vo.js";

export type SubAccountUsdtFuturesPositionRisk = {
  futurePositionRiskVos: FuturePositionRiskVo[];
};

export const subAccountUsdtFuturesPositionRiskSchema: Schema<SubAccountUsdtFuturesPositionRisk> =
  s.object<SubAccountUsdtFuturesPositionRisk>({
    futurePositionRiskVos: s.array(s.lazy(() => futurePositionRiskVoSchema)),
  });
