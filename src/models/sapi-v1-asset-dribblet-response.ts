import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAssetDribbletSchema, type UserAssetDribblet } from "./user-asset-dribblet.js";

export type SapiV1AssetDribbletResponse = {
  total: number;
  userAssetDribblets: UserAssetDribblet[];
};

export const sapiV1AssetDribbletResponseSchema: Schema<SapiV1AssetDribbletResponse> =
  s.object<SapiV1AssetDribbletResponse>({
    total: s.number(),
    userAssetDribblets: s.array(s.lazy(() => userAssetDribbletSchema)),
  });
