import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagerSubTransferHistoryVo2 = {
  fromEmail: string;
  fromAccountType: string;
  toEmail: string;
  toAccountType: string;
  asset: string;
  amount: string;
  scheduledData: number;
  createTime: number;
  status: string;
  tranId: number;
};

export const managerSubTransferHistoryVo2Schema: Schema<ManagerSubTransferHistoryVo2> =
  s.object<ManagerSubTransferHistoryVo2>({
    fromEmail: s.string(),
    fromAccountType: s.string(),
    toEmail: s.string(),
    toAccountType: s.string(),
    asset: s.string(),
    amount: s.string(),
    scheduledData: s.int(),
    createTime: s.int(),
    status: s.string(),
    tranId: s.int(),
  });
