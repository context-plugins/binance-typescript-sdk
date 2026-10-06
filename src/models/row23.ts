import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row23 = {
  collateralCoin: string;
  initialLtv: string;
  marginCallLtv: string;
  liquidationLtv: string;
  maxLimit: string;
  vipLevel: number;
};

export const row23Schema: Schema<Row23> = s.object<Row23>({
  collateralCoin: s.string(),
  initialLtv: s.string(),
  marginCallLtv: s.string(),
  liquidationLtv: s.string(),
  maxLimit: s.string(),
  vipLevel: s.int(),
  _keysMap: {
    initialLtv: "initialLTV",
    marginCallLtv: "marginCallLTV",
    liquidationLtv: "liquidationLTV",
  },
});
