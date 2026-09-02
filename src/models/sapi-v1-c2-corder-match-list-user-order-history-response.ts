import { s, type Schema } from "../core/index.js";
import { data21Schema, type Data21 } from "./data21.js";

export type SapiV1C2COrderMatchListUserOrderHistoryResponse = {
  code: string;
  message: string;
  data: Data21[];
  total: number;
  success: boolean;
};

export const sapiV1C2COrderMatchListUserOrderHistoryResponseSchema: Schema<SapiV1C2COrderMatchListUserOrderHistoryResponse> =
  s.object<SapiV1C2COrderMatchListUserOrderHistoryResponse>({
    code: s.string(),
    message: s.string(),
    data: s.array(s.lazy(() => data21Schema)),
    total: s.number(),
    success: s.boolean(),
  });
