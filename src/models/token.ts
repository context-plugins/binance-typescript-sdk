import { s, type Schema } from "../core/index.js";

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
