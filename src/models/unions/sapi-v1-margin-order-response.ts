import { s, type Schema } from "../../core/index.js";
import { marginOrderResponseAckSchema, type MarginOrderResponseAck } from "../margin-order-response-ack.js";
import {
  marginOrderResponseFullSchema,
  type MarginOrderResponseFull,
} from "../margin-order-response-full.js";
import {
  marginOrderResponseResultSchema,
  type MarginOrderResponseResult,
} from "../margin-order-response-result.js";

export type SapiV1MarginOrderResponse =
  | MarginOrderResponseAck
  | MarginOrderResponseResult
  | MarginOrderResponseFull;

export const sapiV1MarginOrderResponseSchema: Schema<SapiV1MarginOrderResponse> =
  s.of<SapiV1MarginOrderResponse>(
    s.union([
      s.lazy(() => marginOrderResponseAckSchema),
      s.lazy(() => marginOrderResponseResultSchema),
      s.lazy(() => marginOrderResponseFullSchema),
    ]),
  );
