import { s, type Schema } from "../core/index.js";
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
