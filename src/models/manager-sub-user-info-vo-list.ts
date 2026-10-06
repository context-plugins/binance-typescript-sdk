import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagerSubUserInfoVoList = {
  rootUserId: number;
  managersubUserId: number;
  bindParentUserId: number;
  email?: string;
  insertTimeStamp: number;
  bindParentEmail: string;
  isSubUserEnabled: boolean;
  isUserActive: boolean;
  isMarginEnabled: boolean;
  isFutureEnabled: boolean;
  isSignedLvtRiskAgreement: boolean;
};

export const managerSubUserInfoVoListSchema: Schema<ManagerSubUserInfoVoList> =
  s.object<ManagerSubUserInfoVoList>({
    rootUserId: s.int(),
    managersubUserId: s.int(),
    bindParentUserId: s.int(),
    email: s.optional(s.string()),
    insertTimeStamp: s.int(),
    bindParentEmail: s.string(),
    isSubUserEnabled: s.boolean(),
    isUserActive: s.boolean(),
    isMarginEnabled: s.boolean(),
    isFutureEnabled: s.boolean(),
    isSignedLvtRiskAgreement: s.boolean(),
    _keysMap: {
      isSignedLvtRiskAgreement: "isSignedLVTRiskAgreement",
    },
  });
