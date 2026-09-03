import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Transfers = {
  From: "FROM",
  To: "TO",
} as const;
export type Transfers = (typeof Transfers)[keyof typeof Transfers] | (string & {});

export const transfersSchema: EnumSchema<Transfers> = s.enumOf<Transfers>(Transfers);
