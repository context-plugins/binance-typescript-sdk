import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detail = {
  asset: string;
  assetFullName: string;
  /** Convertible amount */
  amountFree: string;
  /** BTC amount */
  toBtc: string;
  /** BNB amount(Not deducted commission fee */
  toBnb: string;
  /** BNB amount(Deducted commission fee */
  toBnbOffExchange: string;
  /** Commission fee */
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
