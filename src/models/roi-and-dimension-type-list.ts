import { s, type Schema } from "../core/index.js";

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
