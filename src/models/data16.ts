import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profitTransferDetailSchema, type ProfitTransferDetail } from "./profit-transfer-detail.js";

export type Data16 = {
  profitTransferDetails: ProfitTransferDetail[];
  totalNum: number;
  pageSize: number;
};

export const data16Schema: Schema<Data16> = s.object<Data16>({
  profitTransferDetails: s.array(s.lazy(() => profitTransferDetailSchema)),
  totalNum: s.number(),
  pageSize: s.number(),
});
