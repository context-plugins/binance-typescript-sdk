import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnAccountResponse = {
  totalAmountInBtc: string;
  totalAmountInUsdt: string;
  totalFlexibleAmountInBtc: string;
  totalFlexibleAmountInUsdt: string;
  totalLockedInBtc: string;
  totalLockedInUsdt: string;
};

export const sapiV1SimpleEarnAccountResponseSchema: Schema<SapiV1SimpleEarnAccountResponse> =
  s.object<SapiV1SimpleEarnAccountResponse>({
    totalAmountInBtc: s.string(),
    totalAmountInUsdt: s.string(),
    totalFlexibleAmountInBtc: s.string(),
    totalFlexibleAmountInUsdt: s.string(),
    totalLockedInBtc: s.string(),
    totalLockedInUsdt: s.string(),
    _keysMap: {
      totalAmountInBtc: "totalAmountInBTC",
      totalAmountInUsdt: "totalAmountInUSDT",
      totalFlexibleAmountInBtc: "totalFlexibleAmountInBTC",
      totalFlexibleAmountInUsdt: "totalFlexibleAmountInUSDT",
      totalLockedInBtc: "totalLockedInBTC",
      totalLockedInUsdt: "totalLockedInUSDT",
    },
  });
