import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Token = {
  network: string;
  tokenId: string;
  contractAddress: string;
};

export const tokenSchema: Schema<Token> = s.object<Token>({
  network: s.string(),
  tokenId: s.string(),
  contractAddress: s.string(),
});
