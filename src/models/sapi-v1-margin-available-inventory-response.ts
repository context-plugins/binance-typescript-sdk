import { s, type Schema } from "../core/index.js";
import { assetsSchema, type Assets } from "./assets.js";

export type SapiV1MarginAvailableInventoryResponse = {
  assets: Assets;
  updateTime: number;
};

export const sapiV1MarginAvailableInventoryResponseSchema: Schema<SapiV1MarginAvailableInventoryResponse> =
  s.object<SapiV1MarginAvailableInventoryResponse>({
    assets: assetsSchema,
    updateTime: s.number(),
  });
