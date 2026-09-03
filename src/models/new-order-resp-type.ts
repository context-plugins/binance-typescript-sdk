import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NewOrderRespType = {
  Ack: "ACK",
  Result: "RESULT",
  Full: "FULL",
} as const;
export type NewOrderRespType = (typeof NewOrderRespType)[keyof typeof NewOrderRespType] | (string & {});

export const newOrderRespTypeSchema: EnumSchema<NewOrderRespType> =
  s.enumOf<NewOrderRespType>(NewOrderRespType);
