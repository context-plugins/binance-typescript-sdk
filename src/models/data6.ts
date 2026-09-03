import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assets2Schema, type Assets2 } from "./assets2.js";
import { position1Schema, type Position1 } from "./position1.js";

export type Data6 = {
  assets: Assets2[];
  position: Position1[];
};

export const data6Schema: Schema<Data6> = s.object<Data6>({
  assets: s.array(s.lazy(() => assets2Schema)),
  position: s.array(s.lazy(() => position1Schema)),
});
