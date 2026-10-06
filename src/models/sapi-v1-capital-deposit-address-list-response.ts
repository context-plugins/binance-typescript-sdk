import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1CapitalDepositAddressListResponse = {
  coin: string;
  address: string;
  isDefault: number;
};

export const sapiV1CapitalDepositAddressListResponseSchema: Schema<SapiV1CapitalDepositAddressListResponse> =
  s.object<SapiV1CapitalDepositAddressListResponse>({
    coin: s.string(),
    address: s.string(),
    isDefault: s.int(),
  });
