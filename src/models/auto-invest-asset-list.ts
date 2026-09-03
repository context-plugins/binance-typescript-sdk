import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  roiAndDimensionTypeListSchema,
  type RoiAndDimensionTypeList,
} from "./roi-and-dimension-type-list.js";

export type AutoInvestAssetList = {
  targetAsset: string;
  roiAndDimensionTypeList: RoiAndDimensionTypeList[];
};

export const autoInvestAssetListSchema: Schema<AutoInvestAssetList> = s.object<AutoInvestAssetList>({
  targetAsset: s.string(),
  roiAndDimensionTypeList: s.array(s.lazy(() => roiAndDimensionTypeListSchema)),
});
