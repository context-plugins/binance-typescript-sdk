import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { futurePositionRiskVoSchema, type FuturePositionRiskVo } from "./future-position-risk-vo.js";

export type SubAccountUsdtFuturesPositionRisk = {
  futurePositionRiskVos: FuturePositionRiskVo[];
};

export const subAccountUsdtFuturesPositionRiskSchema: Schema<SubAccountUsdtFuturesPositionRisk> =
  s.object<SubAccountUsdtFuturesPositionRisk>({
    futurePositionRiskVos: s.array(s.lazy(() => futurePositionRiskVoSchema)),
  });
