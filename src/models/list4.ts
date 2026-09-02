import { s, type Schema } from "../core/index.js";

export type List4 = {
  network: string;
  txId: number | null;
  contractAdrress: string;
  tokenId: string;
  timestamp: number;
};

export const list4Schema: Schema<List4> = s.object<List4>({
  network: s.string(),
  txId: s.nullable(s.number()),
  contractAdrress: s.string(),
  tokenId: s.string(),
  timestamp: s.number(),
  _keysMap: {
    txId: "txID",
  },
});
