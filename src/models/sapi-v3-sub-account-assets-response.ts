import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balance2Schema, type Balance2 } from "./balance2.js";

export type SapiV3SubAccountAssetsResponse = {
  balances: Balance2[];
};

export const sapiV3SubAccountAssetsResponseSchema: Schema<SapiV3SubAccountAssetsResponse> =
  s.object<SapiV3SubAccountAssetsResponse>({
    balances: s.array(s.lazy(() => balance2Schema)),
  });
