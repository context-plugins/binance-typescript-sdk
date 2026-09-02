import { s, type Schema } from "../core/index.js";
import { rowSchema, type Row } from "./row.js";

export type MarginTransferDetails = {
  rows: Row[];
  total: number;
};

export const marginTransferDetailsSchema: Schema<MarginTransferDetails> = s.object<MarginTransferDetails>({
  rows: s.array(s.lazy(() => rowSchema)),
  total: s.number(),
});
