import { s, type Schema } from "../core/index.js";
import { data22Schema, type Data22 } from "./data22.js";

export type SapiV1PayTransactionsResponse = {
  code: string;
  message: string;
  data: Data22[];
  success: boolean;
};

export const sapiV1PayTransactionsResponseSchema: Schema<SapiV1PayTransactionsResponse> =
  s.object<SapiV1PayTransactionsResponse>({
    code: s.string(),
    message: s.string(),
    data: s.array(s.lazy(() => data22Schema)),
    success: s.boolean(),
  });
