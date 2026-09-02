import { s, type Schema } from "../core/index.js";
import { asset1Schema, type Asset1 } from "./asset1.js";
import { positionSchema, type Position } from "./position.js";

export type Data2 = {
  assets: Asset1[];
  position: Position[];
};

export const data2Schema: Schema<Data2> = s.object<Data2>({
  assets: s.array(s.lazy(() => asset1Schema)),
  position: s.array(s.lazy(() => positionSchema)),
});
