import { s, type EnumSchema } from "../core/index.js";

export const Transfers = {
  From: "FROM",
  To: "TO",
} as const;
export type Transfers = (typeof Transfers)[keyof typeof Transfers] | (string & {});

export const transfersSchema: EnumSchema<Transfers> = s.enumOf<Transfers>(Transfers);
