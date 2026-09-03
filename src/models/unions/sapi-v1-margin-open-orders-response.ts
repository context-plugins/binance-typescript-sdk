import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  canceledMarginOrderDetailSchema,
  type CanceledMarginOrderDetail,
} from "../canceled-margin-order-detail.js";
import { marginOcoOrderSchema, type MarginOcoOrder } from "../margin-oco-order.js";

export type SapiV1MarginOpenOrdersResponse = CanceledMarginOrderDetail | MarginOcoOrder;

export const sapiV1MarginOpenOrdersResponseSchema: Schema<SapiV1MarginOpenOrdersResponse> =
  s.of<SapiV1MarginOpenOrdersResponse>(
    s.union([s.lazy(() => canceledMarginOrderDetailSchema), s.lazy(() => marginOcoOrderSchema)]),
  );
