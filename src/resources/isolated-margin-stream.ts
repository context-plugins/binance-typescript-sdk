import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1UserDataStreamIsolatedResponseSchema,
  type SapiV1UserDataStreamIsolatedResponse,
} from "../models/sapi-v1-user-data-stream-isolated-response.js";
import type { Servers } from "../servers.js";

export class IsolatedMarginStream {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  closeAListenKeyUserStream3(
    request: IsolatedMarginStream.CloseAListenKeyUserStream3Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, IsolatedMarginStream.CloseAListenKeyUserStream3Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/sapi/v1/userDataStream/isolated"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: IsolatedMarginStream.CloseAListenKeyUserStream3Error,
      },
      options,
    );
  }

  generateAListenKeyUserStream(
    options?: RequestOptions,
  ): ApiPromise<SapiV1UserDataStreamIsolatedResponse, ResponseError> {
    return this.#rawClient.execute<SapiV1UserDataStreamIsolatedResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/userDataStream/isolated"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1UserDataStreamIsolatedResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  pingKeepAliveAListenKeyUserStream(
    request: IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/sapi/v1/userDataStream/isolated"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError,
      },
      options,
    );
  }
}

export namespace IsolatedMarginStream {
  export type CloseAListenKeyUserStream3Request = {
    listenKey?: string;
  };

  export class CloseAListenKeyUserStream3Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<CloseAListenKeyUserStream3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PingKeepAliveAListenKeyUserStreamRequest = {
    listenKey?: string;
  };

  export class PingKeepAliveAListenKeyUserStreamError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<PingKeepAliveAListenKeyUserStreamError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
