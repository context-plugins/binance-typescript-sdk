import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detail6Schema, type Detail6 } from "./detail6.js";
import { quotaSchema, type Quota } from "./quota.js";

export type Row39 = {
  projectId: string;
  detail: Detail6;
  quota: Quota;
};

export const row39Schema: Schema<Row39> = s.object<Row39>({
  projectId: s.string(),
  detail: detail6Schema,
  quota: quotaSchema,
});
