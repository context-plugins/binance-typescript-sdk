import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type List5 = {
  network: string;
  txId: string;
  contractAdrress: string;
  tokenId: string;
  timestamp: number;
  fee: number;
  feeAsset: string;
};

export const list5Schema: Schema<List5> = s.object<List5>({
  network: s.string(),
  txId: s.string(),
  contractAdrress: s.string(),
  tokenId: s.string(),
  timestamp: s.int(),
  fee: s.float64(),
  feeAsset: s.string(),
  _keysMap: {
    txId: "txID",
  },
});
