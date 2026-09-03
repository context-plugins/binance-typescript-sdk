import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type7 = {
  MainC2C: "MAIN_C2C",
  MainUmfuture: "MAIN_UMFUTURE",
  MainCmfuture: "MAIN_CMFUTURE",
  MainMargin: "MAIN_MARGIN",
  MainMining: "MAIN_MINING",
  C2CMain: "C2C_MAIN",
  C2CUmfuture: "C2C_UMFUTURE",
  C2CMining: "C2C_MINING",
  C2CMargin: "C2C_MARGIN",
  UmfutureMain: "UMFUTURE_MAIN",
  UmfutureC2C: "UMFUTURE_C2C",
  UmfutureMargin: "UMFUTURE_MARGIN",
  CmfutureMain: "CMFUTURE_MAIN",
  CmfutureMargin: "CMFUTURE_MARGIN",
  MarginMain: "MARGIN_MAIN",
  MarginUmfuture: "MARGIN_UMFUTURE",
  MarginCmfuture: "MARGIN_CMFUTURE",
  MarginMining: "MARGIN_MINING",
  MarginC2C: "MARGIN_C2C",
  MiningMain: "MINING_MAIN",
  MiningUmfuture: "MINING_UMFUTURE",
  MiningC2C: "MINING_C2C",
  MiningMargin: "MINING_MARGIN",
  MainPay: "MAIN_PAY",
  PayMain: "PAY_MAIN",
  IsolatedmarginMargin: "ISOLATEDMARGIN_MARGIN",
  MarginIsolatedmargin: "MARGIN_ISOLATEDMARGIN",
  IsolatedmarginIsolatedmargin: "ISOLATEDMARGIN_ISOLATEDMARGIN",
} as const;
export type Type7 = (typeof Type7)[keyof typeof Type7] | (string & {});

export const type7Schema: EnumSchema<Type7> = s.enumOf<Type7>(Type7);
