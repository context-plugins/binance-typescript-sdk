import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV3AvgPriceResponse = {
  /** Average price interval (in minutes) */
  mins: number;
  /** Average price */
  price: string;
  /** Last trade time */
  closeTime: number;
};

export const apiV3AvgPriceResponseSchema: Schema<ApiV3AvgPriceResponse> = s.object<ApiV3AvgPriceResponse>({
  mins: s.int(),
  price: s.string(),
  closeTime: s.int(),
});
