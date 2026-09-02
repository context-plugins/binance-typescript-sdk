import { s, type Schema } from "../core/index.js";
import { indicatorsSchema, type Indicators } from "./indicators.js";
import { triggerConditionSchema, type TriggerCondition } from "./trigger-condition.js";

export type Data4 = {
  isLocked: boolean;
  plannedRecoverTime: number;
  triggerCondition: TriggerCondition;
  indicators: Indicators;
  updateTime: number;
};

export const data4Schema: Schema<Data4> = s.object<Data4>({
  isLocked: s.boolean(),
  plannedRecoverTime: s.number(),
  triggerCondition: triggerConditionSchema,
  indicators: indicatorsSchema,
  updateTime: s.number(),
});
