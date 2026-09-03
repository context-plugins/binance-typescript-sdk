import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rowSchema, type Row } from "./row.js";

export type MarginTransferDetails = {
  rows: Row[];
  total: number;
};

export const marginTransferDetailsSchema: Schema<MarginTransferDetails> = s.object<MarginTransferDetails>({
  rows: s.array(s.lazy(() => rowSchema)),
  total: s.number(),
});
