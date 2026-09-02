import { s, type Schema } from "../core/index.js";

export type SapiV1MarginAllAssetsResponse = {
  assetFullName: string;
  assetName: string;
  isBorrowable: boolean;
  isMortgageable: boolean;
  userMinBorrow: string;
  userMinRepay: string;
};

export const sapiV1MarginAllAssetsResponseSchema: Schema<SapiV1MarginAllAssetsResponse> =
  s.object<SapiV1MarginAllAssetsResponse>({
    assetFullName: s.string(),
    assetName: s.string(),
    isBorrowable: s.boolean(),
    isMortgageable: s.boolean(),
    userMinBorrow: s.string(),
    userMinRepay: s.string(),
  });
