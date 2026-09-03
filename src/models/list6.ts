import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
