import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ManagedSubaccountAssetResponse = {
  coin: string;
  name: string;
  totalBalance: string;
  availableBalance: string;
  inOrder: string;
  btcValue: string;
};

export const sapiV1ManagedSubaccountAssetResponseSchema: Schema<SapiV1ManagedSubaccountAssetResponse> =
  s.object<SapiV1ManagedSubaccountAssetResponse>({
    coin: s.string(),
    name: s.string(),
    totalBalance: s.string(),
    availableBalance: s.string(),
    inOrder: s.string(),
    btcValue: s.string(),
  });
