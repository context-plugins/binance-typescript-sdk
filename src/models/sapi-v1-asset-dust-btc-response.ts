import { s, type Schema } from "../core/index.js";
import { detailSchema, type Detail } from "./detail.js";

export type SapiV1AssetDustBtcResponse = {
  details: Detail[];
  totalTransferBtc: string;
  totalTransferBnb: string;
  dribbletPercentage: string;
};

export const sapiV1AssetDustBtcResponseSchema: Schema<SapiV1AssetDustBtcResponse> =
  s.object<SapiV1AssetDustBtcResponse>({
    details: s.array(s.lazy(() => detailSchema)),
    totalTransferBtc: s.string(),
    totalTransferBnb: s.string(),
    dribbletPercentage: s.string(),
    _keysMap: {
      totalTransferBnb: "totalTransferBNB",
    },
  });
