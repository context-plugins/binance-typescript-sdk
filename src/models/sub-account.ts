import { s, type Schema } from "../core/index.js";

export type SubAccount = {
  email: string;
  isFreeze: boolean;
  createTime: number;
  isManagedSubAccount: boolean;
  isAssetManagementSubAccount: boolean;
};

export const subAccountSchema: Schema<SubAccount> = s.object<SubAccount>({
  email: s.string(),
  isFreeze: s.boolean(),
  createTime: s.number(),
  isManagedSubAccount: s.boolean(),
  isAssetManagementSubAccount: s.boolean(),
});
