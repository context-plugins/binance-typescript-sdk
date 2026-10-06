import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1DciProductSubscribeResponse = {
  positionId: number;
  investCoin: string;
  exercisedCoin: string;
  subscriptionAmount: string;
  duration: number;
  /** STANDARD, ADVANCED, this field won't display when autocompound is set to None */
  autoCompoundPlan: string;
  strikePrice: string;
  settleDate: number;
  purchaseStatus: string;
  apr: string;
  orderId: number;
  purchaseTime: number;
  optionType?: string;
};

export const sapiV1DciProductSubscribeResponseSchema: Schema<SapiV1DciProductSubscribeResponse> =
  s.object<SapiV1DciProductSubscribeResponse>({
    positionId: s.int(),
    investCoin: s.string(),
    exercisedCoin: s.string(),
    subscriptionAmount: s.string(),
    duration: s.int(),
    autoCompoundPlan: s.string(),
    strikePrice: s.string(),
    settleDate: s.int(),
    purchaseStatus: s.string(),
    apr: s.string(),
    orderId: s.int(),
    purchaseTime: s.int(),
    optionType: s.optional(s.string()),
    _keysMap: {
      optionType: 'optionType"',
    },
  });
