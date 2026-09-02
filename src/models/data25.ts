import { s, type Schema } from "../core/index.js";

export type Data25 = {
  referenceNo: string;
  code: string;
  expiredTime: number;
};

export const data25Schema: Schema<Data25> = s.object<Data25>({
  referenceNo: s.string(),
  code: s.string(),
  expiredTime: s.number(),
});
