import { s, type Schema } from "../core/index.js";
import { data23Schema, type Data23 } from "./data23.js";

export type SapiV1RebateTaxQueryResponse = {
  status: string;
  type: string;
  code: string;
  data: Data23;
};

export const sapiV1RebateTaxQueryResponseSchema: Schema<SapiV1RebateTaxQueryResponse> =
  s.object<SapiV1RebateTaxQueryResponse>({
    status: s.string(),
    type: s.string(),
    code: s.string(),
    data: data23Schema,
  });
