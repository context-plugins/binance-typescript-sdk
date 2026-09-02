import { s, type Schema } from "../core/index.js";

export type SapiV1DciProductAutoCompoundEditStatusResponse = {
  positionId: string;
  autoCompoundPlan: string;
};

export const sapiV1DciProductAutoCompoundEditStatusResponseSchema: Schema<SapiV1DciProductAutoCompoundEditStatusResponse> =
  s.object<SapiV1DciProductAutoCompoundEditStatusResponse>({
    positionId: s.string(),
    autoCompoundPlan: s.string(),
  });
