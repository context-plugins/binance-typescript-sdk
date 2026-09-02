import { s, type EnumSchema } from "../core/index.js";

export const TransferSide = {
  ToUm: "TO_UM",
  FromUm: "FROM_UM",
} as const;
export type TransferSide = (typeof TransferSide)[keyof typeof TransferSide] | (string & {});

export const transferSideSchema: EnumSchema<TransferSide> = s.enumOf<TransferSide>(TransferSide);
