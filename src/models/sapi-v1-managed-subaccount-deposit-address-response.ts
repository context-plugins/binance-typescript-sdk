import { s, type Schema } from "../core/index.js";

export type SapiV1ManagedSubaccountDepositAddressResponse = {
  coin: string;
  address: string;
  tag: string;
  url: string;
};

export const sapiV1ManagedSubaccountDepositAddressResponseSchema: Schema<SapiV1ManagedSubaccountDepositAddressResponse> =
  s.object<SapiV1ManagedSubaccountDepositAddressResponse>({
    coin: s.string(),
    address: s.string(),
    tag: s.string(),
    url: s.string(),
  });
