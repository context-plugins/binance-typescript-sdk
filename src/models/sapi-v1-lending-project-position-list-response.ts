import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LendingProjectPositionListResponse = {
  asset: string;
  canTransfer: boolean;
  createTimestamp: number;
  duration: number;
  endTime: number;
  interest: string;
  interestRate: string;
  lot: number;
  positionId: number;
  principal: string;
  projectId: string;
  projectName: string;
  purchaseTime: number;
  redeemDate: string;
  startTime: number;
  status: string;
  type: string;
};

export const sapiV1LendingProjectPositionListResponseSchema: Schema<SapiV1LendingProjectPositionListResponse> =
  s.object<SapiV1LendingProjectPositionListResponse>({
    asset: s.string(),
    canTransfer: s.boolean(),
    createTimestamp: s.int(),
    duration: s.int(),
    endTime: s.int(),
    interest: s.string(),
    interestRate: s.string(),
    lot: s.int(),
    positionId: s.int(),
    principal: s.string(),
    projectId: s.string(),
    projectName: s.string(),
    purchaseTime: s.int(),
    redeemDate: s.dateOnly(),
    startTime: s.int(),
    status: s.string(),
    type: s.string(),
  });
