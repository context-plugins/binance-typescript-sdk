import { s, type Schema } from "../core/index.js";
import { data16Schema, type Data16 } from "./data16.js";

export type SapiV1MiningHashTransferProfitDetailsResponse = {
  code: number;
  msg: string;
  data: Data16;
};

export const sapiV1MiningHashTransferProfitDetailsResponseSchema: Schema<SapiV1MiningHashTransferProfitDetailsResponse> =
  s.object<SapiV1MiningHashTransferProfitDetailsResponse>({
    code: s.number(),
    msg: s.string(),
    data: data16Schema,
  });
