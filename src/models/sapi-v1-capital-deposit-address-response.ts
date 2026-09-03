import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1CapitalDepositAddressResponse = {
  address: string;
  coin: string;
  tag: string;
  url: string;
};

export const sapiV1CapitalDepositAddressResponseSchema: Schema<SapiV1CapitalDepositAddressResponse> =
  s.object<SapiV1CapitalDepositAddressResponse>({
    address: s.string(),
    coin: s.string(),
    tag: s.string(),
    url: s.string(),
  });
