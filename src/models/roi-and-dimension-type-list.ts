import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RoiAndDimensionTypeList = {
  simulateRoi: string;
  dimensionValue: string;
  dimensionUnit: string;
};

export const roiAndDimensionTypeListSchema: Schema<RoiAndDimensionTypeList> =
  s.object<RoiAndDimensionTypeList>({
    simulateRoi: s.string(),
    dimensionValue: s.string(),
    dimensionUnit: s.string(),
  });
