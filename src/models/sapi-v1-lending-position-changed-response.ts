import { s, type Schema } from "../core/index.js";

export type SapiV1LendingPositionChangedResponse = {
  dailyPurchaseId: number;
  success: boolean;
  time: number;
};

export const sapiV1LendingPositionChangedResponseSchema: Schema<SapiV1LendingPositionChangedResponse> =
  s.object<SapiV1LendingPositionChangedResponse>({
    dailyPurchaseId: s.number(),
    success: s.boolean(),
    time: s.number(),
  });
