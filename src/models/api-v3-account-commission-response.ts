import { s, type Schema } from "../core/index.js";
import { discountSchema, type Discount } from "./discount.js";
import { standardCommissionSchema, type StandardCommission } from "./standard-commission.js";
import { taxCommissionSchema, type TaxCommission } from "./tax-commission.js";

export type ApiV3AccountCommissionResponse = {
  symbol: string;
  standardCommission: StandardCommission;
  taxCommission: TaxCommission;
  discount: Discount;
};

export const apiV3AccountCommissionResponseSchema: Schema<ApiV3AccountCommissionResponse> =
  s.object<ApiV3AccountCommissionResponse>({
    symbol: s.string(),
    standardCommission: standardCommissionSchema,
    taxCommission: taxCommissionSchema,
    discount: discountSchema,
  });
