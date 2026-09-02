import { s, type Schema } from "../core/index.js";

export type Quota = {
  totalPersonalQuota: string;
  minimum: string;
};

export const quotaSchema: Schema<Quota> = s.object<Quota>({
  totalPersonalQuota: s.string(),
  minimum: s.string(),
});
