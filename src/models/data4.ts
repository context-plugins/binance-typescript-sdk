import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { indicatorsSchema, type Indicators } from "./indicators.js";
import { triggerConditionSchema, type TriggerCondition } from "./trigger-condition.js";

export type Data4 = {
  /** API trading function is locked or not */
  isLocked: boolean;
  /** If API trading function is locked, this is the planned recover time */
  plannedRecoverTime: number;
  triggerCondition: TriggerCondition;
  /** The indicators updated every 30 seconds */
  indicators: Indicators;
  updateTime: number;
};

export const data4Schema: Schema<Data4> = s.object<Data4>({
  isLocked: s.boolean(),
  plannedRecoverTime: s.int(),
  triggerCondition: triggerConditionSchema,
  indicators: indicatorsSchema,
  updateTime: s.int(),
});
