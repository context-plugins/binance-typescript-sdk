import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAssetDribbletSchema, type UserAssetDribblet } from "./user-asset-dribblet.js";

export type SapiV1AssetDribbletResponse = {
  /** Total counts of exchange */
  total: number;
  userAssetDribblets: UserAssetDribblet[];
};

export const sapiV1AssetDribbletResponseSchema: Schema<SapiV1AssetDribbletResponse> =
  s.object<SapiV1AssetDribbletResponse>({
    total: s.int(),
    userAssetDribblets: s.array(s.lazy(() => userAssetDribbletSchema)),
  });
