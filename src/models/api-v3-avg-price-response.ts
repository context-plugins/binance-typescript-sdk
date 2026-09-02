import { s, type Schema } from "../core/index.js";

export type ApiV3AvgPriceResponse = {
  mins: number;
  price: string;
  closeTime: number;
};

export const apiV3AvgPriceResponseSchema: Schema<ApiV3AvgPriceResponse> = s.object<ApiV3AvgPriceResponse>({
  mins: s.number(),
  price: s.string(),
  closeTime: s.number(),
});
