import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferSide = {
  ToUm: "TO_UM",
  FromUm: "FROM_UM",
} as const;
export type TransferSide = (typeof TransferSide)[keyof typeof TransferSide] | (string & {});

export const transferSideSchema: EnumSchema<TransferSide> = s.enumOf<TransferSide>(TransferSide);
