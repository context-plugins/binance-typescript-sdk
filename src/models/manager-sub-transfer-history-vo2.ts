import { s, type Schema } from "../core/index.js";

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
    scheduledData: s.number(),
    createTime: s.number(),
    status: s.string(),
    tranId: s.number(),
  });
