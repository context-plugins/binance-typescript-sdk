import { s, type Schema } from "../core/index.js";
import { data7Schema, type Data7 } from "./data7.js";

export type SapiV1FiatOrdersResponse = {
  code: string;
  message: string;
  data: Data7[];
  total: number;
  success: boolean;
};

export const sapiV1FiatOrdersResponseSchema: Schema<SapiV1FiatOrdersResponse> =
  s.object<SapiV1FiatOrdersResponse>({
    code: s.string(),
    message: s.string(),
    data: s.array(s.lazy(() => data7Schema)),
    total: s.number(),
    success: s.boolean(),
  });
