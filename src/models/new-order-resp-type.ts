import { s, type EnumSchema } from "../core/index.js";

export const NewOrderRespType = {
  Ack: "ACK",
  Result: "RESULT",
  Full: "FULL",
} as const;
export type NewOrderRespType = (typeof NewOrderRespType)[keyof typeof NewOrderRespType] | (string & {});

export const newOrderRespTypeSchema: EnumSchema<NewOrderRespType> =
  s.enumOf<NewOrderRespType>(NewOrderRespType);
