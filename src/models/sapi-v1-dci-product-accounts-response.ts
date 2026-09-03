import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1DciProductAccountsResponse = {
  totalAmountInBtc: string;
  totalAmountInUsdt: string;
};

export const sapiV1DciProductAccountsResponseSchema: Schema<SapiV1DciProductAccountsResponse> =
  s.object<SapiV1DciProductAccountsResponse>({
    totalAmountInBtc: s.string(),
    totalAmountInUsdt: s.string(),
    _keysMap: {
      totalAmountInBtc: "totalAmountInBTC",
      totalAmountInUsdt: "totalAmountInUSDT",
    },
  });
