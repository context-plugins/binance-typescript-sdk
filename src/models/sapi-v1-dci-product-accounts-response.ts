import { s, type Schema } from "../core/index.js";

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
