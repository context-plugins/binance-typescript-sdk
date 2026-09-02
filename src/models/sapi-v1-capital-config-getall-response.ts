import { s, type Schema } from "../core/index.js";
import { networkListSchema, type NetworkList } from "./network-list.js";

export type SapiV1CapitalConfigGetallResponse = {
  coin: string;
  depositAllEnable: boolean;
  free: string;
  freeze: string;
  ipoable: string;
  ipoing: string;
  isLegalMoney: boolean;
  locked: string;
  name: string;
  networkList: NetworkList[];
  storage: string;
  trading: boolean;
  withdrawAllEnable: boolean;
  withdrawing: string;
};

export const sapiV1CapitalConfigGetallResponseSchema: Schema<SapiV1CapitalConfigGetallResponse> =
  s.object<SapiV1CapitalConfigGetallResponse>({
    coin: s.string(),
    depositAllEnable: s.boolean(),
    free: s.string(),
    freeze: s.string(),
    ipoable: s.string(),
    ipoing: s.string(),
    isLegalMoney: s.boolean(),
    locked: s.string(),
    name: s.string(),
    networkList: s.array(s.lazy(() => networkListSchema)),
    storage: s.string(),
    trading: s.boolean(),
    withdrawAllEnable: s.boolean(),
    withdrawing: s.string(),
  });
