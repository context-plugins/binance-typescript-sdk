import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliveryPositionRiskVoSchema, type DeliveryPositionRiskVo } from "./delivery-position-risk-vo.js";

export type SubAccountCoinFuturesPositionRisk = {
  deliveryPositionRiskVos: DeliveryPositionRiskVo[];
};

export const subAccountCoinFuturesPositionRiskSchema: Schema<SubAccountCoinFuturesPositionRisk> =
  s.object<SubAccountCoinFuturesPositionRisk>({
    deliveryPositionRiskVos: s.array(s.lazy(() => deliveryPositionRiskVoSchema)),
  });
