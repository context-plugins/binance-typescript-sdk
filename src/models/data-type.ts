import { s, type EnumSchema } from "../core/index.js";

export const DataType = {
  TDepth: "T_DEPTH",
  SDepth: "S_DEPTH",
} as const;
export type DataType = (typeof DataType)[keyof typeof DataType] | (string & {});

export const dataTypeSchema: EnumSchema<DataType> = s.enumOf<DataType>(DataType);
