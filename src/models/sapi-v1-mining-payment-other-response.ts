import { s, type Schema } from "../core/index.js";
import { data14Schema, type Data14 } from "./data14.js";

export type SapiV1MiningPaymentOtherResponse = {
  code: number;
  msg: string;
  data: Data14;
};

export const sapiV1MiningPaymentOtherResponseSchema: Schema<SapiV1MiningPaymentOtherResponse> =
  s.object<SapiV1MiningPaymentOtherResponse>({
    code: s.number(),
    msg: s.string(),
    data: data14Schema,
  });
