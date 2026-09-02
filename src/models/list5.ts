import { s, type Schema } from "../core/index.js";

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
  timestamp: s.number(),
  fee: s.number(),
  feeAsset: s.string(),
  _keysMap: {
    txId: "txID",
  },
});
