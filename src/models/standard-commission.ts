import { s, type Schema } from "../core/index.js";

export type StandardCommission = {
  maker: string;
  taker: string;
  buyer: string;
  seller: string;
};

export const standardCommissionSchema: Schema<StandardCommission> = s.object<StandardCommission>({
  maker: s.string(),
  taker: s.string(),
  buyer: s.string(),
  seller: s.string(),
});
