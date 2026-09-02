import { s, type Schema } from "../core/index.js";

export type Data26 = {
  token: string;
  amount: string;
  referenceNo: string;
  identityNo: string;
};

export const data26Schema: Schema<Data26> = s.object<Data26>({
  token: s.string(),
  amount: s.string(),
  referenceNo: s.string(),
  identityNo: s.string(),
});
