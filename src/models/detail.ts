import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detail = {
  asset: string;
  assetFullName: string;
  amountFree: string;
  toBtc: string;
  toBnb: string;
  toBnbOffExchange: string;
  exchange: string;
};

export const detailSchema: Schema<Detail> = s.object<Detail>({
  asset: s.string(),
  assetFullName: s.string(),
  amountFree: s.string(),
  toBtc: s.string(),
  toBnb: s.string(),
  toBnbOffExchange: s.string(),
  exchange: s.string(),
  _keysMap: {
    toBtc: "toBTC",
    toBnb: "toBNB",
    toBnbOffExchange: "toBNBOffExchange",
  },
});
