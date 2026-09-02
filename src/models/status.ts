import { s, type EnumSchema } from "../core/index.js";

export const Status = {
  All: "ALL",
  Subscribable: "SUBSCRIBABLE",
  Unsubscribable: "UNSUBSCRIBABLE",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
