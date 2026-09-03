import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quota = {
  totalPersonalQuota: string;
  minimum: string;
};

export const quotaSchema: Schema<Quota> = s.object<Quota>({
  totalPersonalQuota: s.string(),
  minimum: s.string(),
});
