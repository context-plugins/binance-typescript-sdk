import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagerSubTransferHistoryVo = {
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

export const managerSubTransferHistoryVoSchema: Schema<ManagerSubTransferHistoryVo> =
  s.object<ManagerSubTransferHistoryVo>({
    fromEmail: s.string(),
    fromAccountType: s.string(),
    toEmail: s.string(),
    toAccountType: s.string(),
    asset: s.string(),
    amount: s.string(),
    scheduledData: s.number(),
    createTime: s.number(),
    status: s.string(),
    tranId: s.number(),
  });
