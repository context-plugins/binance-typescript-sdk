import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subAccountSchema, type SubAccount } from "./sub-account.js";

export type SapiV1SubAccountListResponse = {
  subAccounts: SubAccount[];
};

export const sapiV1SubAccountListResponseSchema: Schema<SapiV1SubAccountListResponse> =
  s.object<SapiV1SubAccountListResponse>({
    subAccounts: s.array(s.lazy(() => subAccountSchema)),
  });
