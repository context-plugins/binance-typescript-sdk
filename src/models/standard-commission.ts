import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Standard commission rates on trades from the order. */
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
