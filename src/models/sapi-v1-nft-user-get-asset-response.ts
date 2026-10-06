import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { list6Schema, type List6 } from "./list6.js";

export type SapiV1NftUserGetAssetResponse = {
  total: number;
  list: List6[];
};

export const sapiV1NftUserGetAssetResponseSchema: Schema<SapiV1NftUserGetAssetResponse> =
  s.object<SapiV1NftUserGetAssetResponse>({
    total: s.int(),
    list: s.array(s.lazy(() => list6Schema)),
  });
