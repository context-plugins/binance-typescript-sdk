import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV3UserDataStreamResponseSchema,
  type ApiV3UserDataStreamResponse,
} from "../models/api-v3-user-data-stream-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class Stream {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  closeAListenKeyUserStream(
    request: Stream.CloseAListenKeyUserStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Stream.CloseAListenKeyUserStreamError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/api/v3/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Stream.CloseAListenKeyUserStreamError,
      },
      options,
    );
  }

  createAListenKeyUserStream(
    options?: RequestOptions,
  ): ApiPromise<ApiV3UserDataStreamResponse, ResponseError> {
    return this.#rawClient.execute<ApiV3UserDataStreamResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3UserDataStreamResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  pingKeepAliveAListenKeyUserStream(
    request: Stream.PingKeepAliveAListenKeyUserStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Stream.PingKeepAliveAListenKeyUserStreamError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/api/v3/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Stream.PingKeepAliveAListenKeyUserStreamError,
      },
      options,
    );
  }
}

export namespace Stream {
  export type CloseAListenKeyUserStreamRequest = {
    listenKey?: string;
  };

  export class CloseAListenKeyUserStreamError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<CloseAListenKeyUserStreamError> = [
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
