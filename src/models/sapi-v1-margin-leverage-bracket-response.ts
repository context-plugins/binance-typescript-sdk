import { s, type Schema } from "../core/index.js";
import { bracketSchema, type Bracket } from "./bracket.js";

export type SapiV1MarginLeverageBracketResponse = {
  assetNames: string[];
  rank: number;
  brackets: Bracket[];
};

export const sapiV1MarginLeverageBracketResponseSchema: Schema<SapiV1MarginLeverageBracketResponse> =
  s.object<SapiV1MarginLeverageBracketResponse>({
    assetNames: s.array(s.string()),
    rank: s.number(),
    brackets: s.array(s.lazy(() => bracketSchema)),
  });
