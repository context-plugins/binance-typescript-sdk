import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type List4 = {
  network: string;
  txId: number | null;
  contractAdrress: string;
  tokenId: string;
  timestamp: number;
};

export const list4Schema: Schema<List4> = s.object<List4>({
  network: s.string(),
  txId: s.nullable(s.int()),
  contractAdrress: s.string(),
  tokenId: s.string(),
  timestamp: s.int(),
  _keysMap: {
    txId: "txID",
  },
});
