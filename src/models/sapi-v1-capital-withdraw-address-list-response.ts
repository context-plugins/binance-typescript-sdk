import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1CapitalWithdrawAddressListResponse = {
  address: string;
  addressTag: string;
  coin: string;
  name: string;
  network: string;
  origin: string;
  originType: string;
  whiteStatus: boolean;
};

export const sapiV1CapitalWithdrawAddressListResponseSchema: Schema<SapiV1CapitalWithdrawAddressListResponse> =
  s.object<SapiV1CapitalWithdrawAddressListResponse>({
    address: s.string(),
    addressTag: s.string(),
    coin: s.string(),
    name: s.string(),
    network: s.string(),
    origin: s.string(),
    originType: s.string(),
    whiteStatus: s.boolean(),
  });
