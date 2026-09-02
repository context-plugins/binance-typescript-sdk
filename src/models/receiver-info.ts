import { s, type Schema } from "../core/index.js";
import { extendSchema, type Extend } from "./extend.js";

export type ReceiverInfo = {
  name: string;
  type: string;
  email: string;
  binanceId: string;
  accountId: string;
  countryCode: string;
  phoneNumber: string;
  mobileCode: string;
  extend?: Extend[];
};

export const receiverInfoSchema: Schema<ReceiverInfo> = s.object<ReceiverInfo>({
  name: s.string(),
  type: s.string(),
  email: s.string(),
  binanceId: s.string(),
  accountId: s.string(),
  countryCode: s.string(),
  phoneNumber: s.string(),
  mobileCode: s.string(),
  extend: s.optional(s.array(s.lazy(() => extendSchema))),
});
