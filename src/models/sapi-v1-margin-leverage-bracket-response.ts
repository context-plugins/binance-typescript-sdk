import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
