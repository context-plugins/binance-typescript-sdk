import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1UserDataStreamResponseSchema,
  type SapiV1UserDataStreamResponse,
} from "../models/sapi-v1-user-data-stream-response.js";
import type { Servers } from "../servers.js";

export class MarginStream {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  closeAListenKeyUserStream2(
    request: MarginStream.CloseAListenKeyUserStream2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, MarginStream.CloseAListenKeyUserStream2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/sapi/v1/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: MarginStream.CloseAListenKeyUserStream2Error,
      },
      options,
    );
  }

  createAListenKeyUserStream2(
    options?: RequestOptions,
  ): ApiPromise<SapiV1UserDataStreamResponse, ResponseError> {
    return this.#rawClient.execute<SapiV1UserDataStreamResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1UserDataStreamResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  pingKeepAliveAListenKeyUserStream2(
    request: MarginStream.PingKeepAliveAListenKeyUserStream2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, MarginStream.PingKeepAliveAListenKeyUserStream2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/sapi/v1/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: MarginStream.PingKeepAliveAListenKeyUserStream2Error,
      },
      options,
    );
  }
}

export namespace MarginStream {
  export type CloseAListenKeyUserStream2Request = {
    listenKey?: string;
  };

  export class CloseAListenKeyUserStream2Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<CloseAListenKeyUserStream2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PingKeepAliveAListenKeyUserStream2Request = {
    listenKey?: string;
  };

  export class PingKeepAliveAListenKeyUserStream2Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<PingKeepAliveAListenKeyUserStream2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
