import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data20 = {
  day: string;
  url: string;
};

export const data20Schema: Schema<Data20> = s.object<Data20>({
  day: s.string(),
  url: s.string(),
});
