import { s, type Schema } from "../core/index.js";

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
    rootUserId: s.number(),
    managersubUserId: s.number(),
    bindParentUserId: s.number(),
    email: s.optional(s.string()),
    insertTimeStamp: s.number(),
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
