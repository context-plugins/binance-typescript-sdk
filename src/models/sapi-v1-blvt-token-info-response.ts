import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currentBasketSchema, type CurrentBasket } from "./current-basket.js";

export type SapiV1BlvtTokenInfoResponse = {
  tokenName: string;
  description: string;
  underlying: string;
  tokenIssued: string;
  basket: string;
  currentBaskets: CurrentBasket[];
  nav: string;
  realLeverage: string;
  fundingRate: string;
  dailyManagementFee: string;
  purchaseFeePct: string;
  dailyPurchaseLimit: string;
  redeemFeePct: string;
  dailyRedeemLimit: string;
  timestamp: number;
};

export const sapiV1BlvtTokenInfoResponseSchema: Schema<SapiV1BlvtTokenInfoResponse> =
  s.object<SapiV1BlvtTokenInfoResponse>({
    tokenName: s.string(),
    description: s.string(),
    underlying: s.string(),
    tokenIssued: s.string(),
    basket: s.string(),
    currentBaskets: s.array(s.lazy(() => currentBasketSchema)),
    nav: s.string(),
    realLeverage: s.string(),
    fundingRate: s.string(),
    dailyManagementFee: s.string(),
    purchaseFeePct: s.string(),
    dailyPurchaseLimit: s.string(),
    redeemFeePct: s.string(),
    dailyRedeemLimit: s.string(),
    timestamp: s.int(),
  });
