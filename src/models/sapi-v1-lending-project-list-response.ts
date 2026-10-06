import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LendingProjectListResponse = {
  asset: string;
  displayPriority: number;
  duration: number;
  interestPerLot: string;
  interestRate: string;
  lotSize: string;
  lotsLowLimit: number;
  lotsPurchased: number;
  lotsUpLimit: number;
  maxLotsPerUser: number;
  needKyc: boolean;
  projectId: string;
  projectName: string;
  status: string;
  type: string;
  withAreaLimitation: boolean;
};

export const sapiV1LendingProjectListResponseSchema: Schema<SapiV1LendingProjectListResponse> =
  s.object<SapiV1LendingProjectListResponse>({
    asset: s.string(),
    displayPriority: s.int(),
    duration: s.int(),
    interestPerLot: s.string(),
    interestRate: s.string(),
    lotSize: s.string(),
    lotsLowLimit: s.int(),
    lotsPurchased: s.int(),
    lotsUpLimit: s.int(),
    maxLotsPerUser: s.int(),
    needKyc: s.boolean(),
    projectId: s.string(),
    projectName: s.string(),
    status: s.string(),
    type: s.string(),
    withAreaLimitation: s.boolean(),
  });
