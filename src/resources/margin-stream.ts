import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1UserDataStreamResponseSchema,
  type SapiV1UserDataStreamResponse,
} from "../models/sapi-v1-user-data-stream-response.js";
import type { Servers } from "../servers.js";

/**
 * Margin User Data Stream
 */
export class MarginStream {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Close a ListenKey (USER_STREAM)
   *
   * @remarks
   * Close out a user data stream.
   *
   * Weight: 1
   *
   * @returns OK
   *
   * @throws {@link MarginStream.CloseAListenKeyUserStream2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  closeAListenKeyUserStream2(
    request: MarginStream.CloseAListenKeyUserStream2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, MarginStream.CloseAListenKeyUserStream2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sapi/v1/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: MarginStream.CloseAListenKeyUserStream2Error,
      },
      options,
    );
  }

  /**
   * Create a ListenKey (USER_STREAM)
   *
   * @remarks
   * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is
   * sent. If the account has an active `listenKey`, that `listenKey` will be returned and its
   * validity will be extended for 60 minutes.
   *
   * Weight: 1
   *
   * @returns Margin listen key
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAListenKeyUserStream2(options?: RequestOptions): ApiPromise<SapiV1UserDataStreamResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1UserDataStreamResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Ping/Keep-alive a ListenKey (USER_STREAM)
   *
   * @remarks
   * Keepalive a user data stream to prevent a time out. User data streams will close after 60
   * minutes. It's recommended to send a ping about every 30 minutes.
   *
   * Weight: 1
   *
   * @returns OK
   *
   * @throws {@link MarginStream.PingKeepAliveAListenKeyUserStream2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pingKeepAliveAListenKeyUserStream2(
    request: MarginStream.PingKeepAliveAListenKeyUserStream2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, MarginStream.PingKeepAliveAListenKeyUserStream2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sapi/v1/userDataStream"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** User websocket listen key */
    listenKey?: string;
  };

  export class CloseAListenKeyUserStream2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<CloseAListenKeyUserStream2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PingKeepAliveAListenKeyUserStream2Request = {
    /** User websocket listen key */
    listenKey?: string;
  };

  export class PingKeepAliveAListenKeyUserStream2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<PingKeepAliveAListenKeyUserStream2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
