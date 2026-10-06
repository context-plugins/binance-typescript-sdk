import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountSchema, type Discount } from "./discount.js";
import { standardCommissionSchema, type StandardCommission } from "./standard-commission.js";
import { taxCommissionSchema, type TaxCommission } from "./tax-commission.js";

export type ApiV3AccountCommissionResponse = {
  symbol: string;
  /** Standard commission rates on trades from the order. */
  standardCommission: StandardCommission;
  /** Tax commission rates for trades from the order. */
  taxCommission: TaxCommission;
  /** Discount commission when paying in BNB. */
  discount: Discount;
};

export const apiV3AccountCommissionResponseSchema: Schema<ApiV3AccountCommissionResponse> =
  s.object<ApiV3AccountCommissionResponse>({
    symbol: s.string(),
    standardCommission: standardCommissionSchema,
    taxCommission: taxCommissionSchema,
    discount: discountSchema,
  });
