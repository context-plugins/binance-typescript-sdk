import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TriggerCondition = {
  /** Number of GTC orders */
  gcr: number;
  /** Number of FOK/IOC orders */
  ifer: number;
  /** Number of orders */
  ufr: number;
};

export const triggerConditionSchema: Schema<TriggerCondition> = s.object<TriggerCondition>({
  gcr: s.int(),
  ifer: s.int(),
  ufr: s.int(),
  _keysMap: {
    gcr: "GCR",
    ifer: "IFER",
    ufr: "UFR",
  },
});
