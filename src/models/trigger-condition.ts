import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TriggerCondition = {
  gcr: number;
  ifer: number;
  ufr: number;
};

export const triggerConditionSchema: Schema<TriggerCondition> = s.object<TriggerCondition>({
  gcr: s.number(),
  ifer: s.number(),
  ufr: s.number(),
  _keysMap: {
    gcr: "GCR",
    ifer: "IFER",
    ufr: "UFR",
  },
});
