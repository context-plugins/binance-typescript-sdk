import { s, type Schema } from "../core/index.js";

export type Row30 = {
  collateralCoin: string;
  initialLtv: string;
  marginCallLtv: string;
  liquidationLtv: string;
  maxLimit: string;
};

export const row30Schema: Schema<Row30> = s.object<Row30>({
  collateralCoin: s.string(),
  initialLtv: s.string(),
  marginCallLtv: s.string(),
  liquidationLtv: s.string(),
  maxLimit: s.string(),
  _keysMap: {
    initialLtv: "initialLTV",
    marginCallLtv: "marginCallLTV",
    liquidationLtv: "liquidationLTV",
  },
});
