import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/index.js";
import { apiKeyHeaderAuth } from "./core/index.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyAuth: apiKeyHeaderAuth({ name: "X-MBX-APIKEY", token: options.apiKeyAuth }),
  };
}
