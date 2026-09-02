import { s, type Schema } from "../core/index.js";

export type SapiV1DciProductSubscribeResponse = {
  positionId: number;
  investCoin: string;
  exercisedCoin: string;
  subscriptionAmount: string;
  duration: number;
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
    positionId: s.number(),
    investCoin: s.string(),
    exercisedCoin: s.string(),
    subscriptionAmount: s.string(),
    duration: s.number(),
    autoCompoundPlan: s.string(),
    strikePrice: s.string(),
    settleDate: s.number(),
    purchaseStatus: s.string(),
    apr: s.string(),
    orderId: s.number(),
    purchaseTime: s.number(),
    optionType: s.optional(s.string()),
    _keysMap: {
      optionType: "optionType\"",
    },
  });
