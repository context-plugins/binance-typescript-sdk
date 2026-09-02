import { s, type Schema } from "../core/index.js";

export type List6 = {
  network: string;
  contractAddress: string;
  tokenId: string;
};

export const list6Schema: Schema<List6> = s.object<List6>({
  network: s.string(),
  contractAddress: s.string(),
  tokenId: s.string(),
});
