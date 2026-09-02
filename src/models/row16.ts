import { s, type Schema } from "../core/index.js";

export type Row16 = {
  collateralCoin: string;
  StCollateralRatio1: string;
  StCollateralRange1: string;
  NdCollateralRatio2: string;
  NdCollateralRange2: string;
  RdCollateralRatio3: string;
  RdCollateralRange3: string;
  ThCollateralRatio4: string;
  ThCollateralRange4: string;
};

export const row16Schema: Schema<Row16> = s.object<Row16>({
  collateralCoin: s.string(),
  StCollateralRatio1: s.string(),
  StCollateralRange1: s.string(),
  NdCollateralRatio2: s.string(),
  NdCollateralRange2: s.string(),
  RdCollateralRatio3: s.string(),
  RdCollateralRange3: s.string(),
  ThCollateralRatio4: s.string(),
  ThCollateralRange4: s.string(),
  _keysMap: {
    StCollateralRatio1: "_1stCollateralRatio",
    StCollateralRange1: "_1stCollateralRange",
    NdCollateralRatio2: "_2ndCollateralRatio",
    NdCollateralRange2: "_2ndCollateralRange",
    RdCollateralRatio3: "_3rdCollateralRatio",
    RdCollateralRange3: "_3rdCollateralRange",
    ThCollateralRatio4: "_4thCollateralRatio",
    ThCollateralRange4: "_4thCollateralRange",
  },
});
