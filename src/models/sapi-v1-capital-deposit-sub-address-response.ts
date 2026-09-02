import { s, type Schema } from "../core/index.js";

export type SapiV1CapitalDepositSubAddressResponse = {
  address: string;
  coin: string;
  tag: string;
  url: string;
};

export const sapiV1CapitalDepositSubAddressResponseSchema: Schema<SapiV1CapitalDepositSubAddressResponse> =
  s.object<SapiV1CapitalDepositSubAddressResponse>({
    address: s.string(),
    coin: s.string(),
    tag: s.string(),
    url: s.string(),
  });
